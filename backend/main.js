// const express = require("express");
// const { MongoClient, ObjectId } = require("mongodb");
// require("dotenv").config();
// const cors = require("cors");

// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:3000',  // Frontend running on this port
//   methods: 'GET, POST, PUT, DELETE',
// }));

// app.use(express.json());

// const mongoose = require('mongoose');

// const mongoUrl = process.env.MONGO_URL;

// // try {
// //   mongoose.connect(mongoUrl, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //     serverSelectionTimeoutMS: 50000,  // Increase timeout duration
// //     socketTimeoutMS: 45000
// //   }).then(() => {
// //       console.log('Connected to MongoDB');
// //   }).catch((err) => {
// //       console.error('MongoDB connection error:', err);
// //   });
  
// // } catch (error) {
// //   console.error('Error occurred:', error.message);
// //   res.status(500).send('Internal Server Error');
// // }


// // MongoDB Connection URI
// const uri = process.env.MONGO_URL;
// const client = new MongoClient(uri);

// // Connect MongoDB once at the start
// let db;

// async function connectDB() {
//   try {
//     if (!db) {
//       await client.connect();
//       console.log("Connected to MongoDB");
//       db = client.db("Shoes");  // Select the "Shoes" database
//     }
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//     process.exit(1);  // Exit the process if MongoDB connection fails
//   }
// }

// connectDB();

// // Route to fetch all products
// app.get("/api/products", async (req, res) => {
//   try {
//     const products = await db.collection("products_collection").find({}).toArray();
//     // console.log(products);
    
//     res.status(200).json(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ message: "Error fetching products" });
//   }
// });

const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const cors = require("cors");

const app = express();

// Middleware
app.use(cors({
  origin: 'https://frontend-pearl-two-61.vercel.app/',  // Frontend running on this port
  methods: 'GET, POST, PUT, DELETE',
}));

app.use(express.json());

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


app.get('/', (req, res) => {
  res.send('Welcome to the backend!');
});

// // Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

