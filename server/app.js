// app.js
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT;
const mongoURI = process.env.db;
const dbName = "jabar-project";
const cors = require("cors");

const corsOptions = {
  origin: "*", // Allow requests from all origins
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow specified HTTP methods
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

mongoose
  .connect(`${mongoURI}${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // MongoDB connection successful, no need to listen on this port
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("jabaar project");
});

app.use(cors(corsOptions));

const authRoutes = require("./routes/authRoutes");
const paypalRoutes = require("./routes/paypalRoutes")


app.use("/auth", authRoutes);
app.use("/paypal", paypalRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});
