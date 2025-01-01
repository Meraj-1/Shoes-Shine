const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',  // Frontend running on this port
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization'
}));

app.use(express.json());

// MongoDB Connection URI
const uri = process.env.MONGO_URL;
const client = new MongoClient(uri);

// Connect MongoDB once at the start
let db;

async function connectDB() {
  try {
    if (!db) {
      await client.connect();
      console.log("Connected to MongoDB");
      db = client.db("Shoes");  // Select the "Shoes" database
    }
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);  // Exit the process if MongoDB connection fails
  }
}

connectDB();

// Route to fetch all products
app.get("/api/products", async (req, res) => {
  try {
    const products = await db.collection("products_collection").find({}).toArray();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
});

// // Route to fetch a single product by ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    if (!ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }
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

// // Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

