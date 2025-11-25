const mongoose = require("mongoose");
require("dotenv").config();

const CloudMongoDB = process.env.CloudMongoDB;

const mongoURL = CloudMongoDB;

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("✅ Connected to Mongoose successfully");
  } catch (error) {
    console.error("❌ Mongoose connection failed:", error);
  }
};

module.exports = connectToMongo;
