const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());

// MongoDB connection variables
const uri = process.env.MONGO_URL;
let cachedDb = null;

// Function to get the database connection
async function connectDB() {
  if (cachedDb) {
    // If the database connection is cached, reuse it
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

// Route to fetch all products
app.get("/api/products", async (req, res) => {
  try {
    const db = await connectDB(); // Ensure the database is connected
    const products = await db.collection("products_collection").find({}).toArray();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Error fetching products" });
  }
});

// Route to fetch a single product by ID
app.get("/api/products/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    // Check if the productId is a valid ObjectId
    if (!ObjectId.isValid(productId)) {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    // Ensure db is initialized before attempting to query the collection
    const db = await connectDB(); // Make sure to get the connected db

    // Attempt to find the product in the database
    const product = await db.collection("products_collection").findOne({ _id: new ObjectId(productId) });

    // If product not found, return a 404 error
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // If product found, return the product data
    res.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
