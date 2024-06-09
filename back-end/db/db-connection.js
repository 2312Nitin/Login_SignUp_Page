const mongoose = require('mongoose');
const express = require('express');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase');
    console.log("db connected");
  } catch (error) {
    console.error(error.message); // Log the error message
  }
};

module.exports = connectDB;