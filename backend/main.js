const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

const corsOptions = {
  origin: '*',  
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(express.json());


// MongoDB connection variables
const uri = process.env.MONGO_URL;
let cachedDb = null;

// Function to get the database connection
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
    cachedDb = client.db("Shoes");  // Replace "Shoes" with your database name
    return cachedDb;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// Routes
app.get("/api/products", async (req, res) => {
  try {
    const db = await connectDB();
    const products = await db.collection("products_collection").find({}).toArray();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
});


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
    }else{
    res.json(product);
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});



// / Create Account
app.post("/api/auth/createaccount", async (req, res) => {
  const { email, password } = req.body;

  try {
    const db = await connectDB();
    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    const newUser = { email, password: hashedPassword };
    const result = await db.collection("users").insertOne(newUser);

    res.status(201).json({ message: "Account created successfully", userId: result.insertedId });
  } catch (error) {
    console.error("Error creating account:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
