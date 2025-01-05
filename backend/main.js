const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Middleware
const allowedOrigins = [
  "http://localhost:5173", // Development origin
  "https://shoes-shine-xwrd.vercel.app", // Production frontend origin
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      // Allow requests with no origin (like mobile apps or curl requests)
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

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

    // Check if the productId is a valid ObjectId
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
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
