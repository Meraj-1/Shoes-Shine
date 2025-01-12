const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || "*", // Update to allow only your frontend in production
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"], // Include "Authorization" for JWT
};
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB connection variables
const uri = process.env.MONGO_URL;
let cachedDb = null;

// Function to connect to MongoDB
async function connectDB() {
  if (cachedDb) {
    return cachedDb;
  }

  try {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    console.log("Connected to MongoDB");
    cachedDb = client.db("Shoes"); // Replace "Shoes" with your database name
    return cachedDb;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("Database connection failed");
  }
}

// Routes
// Health check endpoint
app.get("/api/health", async (req, res) => {
  try {
    const db = await connectDB();
    res.status(200).json({ message: "Server and DB are running fine" });
  } catch (error) {
    res.status(500).json({ message: "Health check failed", error: error.message });
  }
});

// Get all products
app.get("/api/products", async (req, res) => {
  try {
    const db = await connectDB();
    const products = await db.collection("products_collection").find({}).toArray();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Error fetching products" });
  }
});

// Get product by ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    if (!ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
    const db = await connectDB();
    const product = await db.collection("products_collection").findOne({ _id: new ObjectId(productId) });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Create Account
// app.post("/api/auth/createaccount", async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const db = await connectDB();
//     const existingUser = await db.collection("users").findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "Email already in use" });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = { name, email, password: hashedPassword };
//     const result = await db.collection("users").insertOne(newUser);
//     res.status(201).json({ message: "Account created successfully", userId: result.insertedId });
//   } catch (error) {
//     console.error("Error creating account:", error.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Login
// app.post("/api/auth/login", async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const db = await connectDB();
//     const user = await db.collection("users").findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid email or password" });
//     }
//     const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" });
//     res.status(200).json({ message: "Login successful", token });
//   } catch (error) {
//     console.error("Error during login:", error.message);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// Welcome endpoint
app.get("/", (req, res) => {
  res.send("Welcome to the backend!");
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
