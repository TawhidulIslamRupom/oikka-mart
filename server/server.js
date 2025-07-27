const express = require("express"); // Importing express for creating the server
const mongoose = require("mongoose"); // Importing mongoose for connecting to MongoDB
const cookieParser = require("cookie-parser"); // Importing cookie-parser to parse cookies
const cors = require("cors"); // Importing cors to enable cross-origin requests
const authRouter = require("./routes/auth/auth-routes"); // Importing authentication routes
const adminProductsRouter = require("./routes/admin/products-routes"); // Importing admin product routes
const adminOrderRouter = require("./routes/admin/order-routes"); // Importing admin order routes

const shopProductsRouter = require("./routes/shop/products-routes"); // Importing shop product routes
const shopCartRouter = require("./routes/shop/cart-routes"); // Importing shop cart routes
const shopAddressRouter = require("./routes/shop/address-routes"); // Importing shop address routes
const shopOrderRouter = require("./routes/shop/order-routes"); // Importing shop order routes
const shopSearchRouter = require("./routes/shop/search-routes"); // Importing shop search routes
const shopReviewRouter = require("./routes/shop/review-routes"); // Importing shop review routes

const commonFeatureRouter = require("./routes/common/feature-routes"); // Importing common feature routes

// Create a database connection using mongoose, connecting to a MongoDB Atlas cluster
mongoose
  .connect("mongodb+srv://wahabreja:reja32103434@cluster0.gkjjdd3.mongodb.net/peter")
  .then(() => console.log("MongoDB connected")) // Success message on successful connection
  .catch((error) => console.log(error)); // Log the error if connection fails

const app = express(); // Initialize express app
const PORT = process.env.PORT || 5000; // Setting the port, either from environment variable or default to 5000

// CORS setup to allow requests from specific origin with specific methods and headers
app.use(
  cors({
    origin: "http://localhost:5173", // Allowing requests from this origin
    methods: ["GET", "POST", "DELETE", "PUT"], // Allowed HTTP methods
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ], // Specified allowed headers
    credentials: true, // Allowing cookies to be sent with cross-origin requests
  })
);

app.use(cookieParser()); // Middleware to parse cookies
app.use(express.json()); // Middleware to parse incoming JSON requests

// Setting up routes for different API endpoints
app.use("/api/auth", authRouter); // Authentication routes
app.use("/api/admin/products", adminProductsRouter); // Admin product management routes
app.use("/api/admin/orders", adminOrderRouter); // Admin order management routes

app.use("/api/shop/products", shopProductsRouter); // Shop product listing and management routes
app.use("/api/shop/cart", shopCartRouter); // Shop cart management routes
app.use("/api/shop/address", shopAddressRouter); // Shop address management routes
app.use("/api/shop/order", shopOrderRouter); // Shop order management routes
app.use("/api/shop/search", shopSearchRouter); // Shop search functionality routes
app.use("/api/shop/review", shopReviewRouter); // Shop product review routes

app.use("/api/common/feature", commonFeatureRouter); // Common features shared across different modules

// Start the server and listen on the defined port
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`)); 
