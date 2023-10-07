const mongoose = require("mongoose");

// import React from 'react'

// const connectDb = async () => {};

async function connectDb() {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(
      "database connected",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log("Error in connecting with db", error);
    // process.exit(1);
  }
}

// export default connectDb;
module.exports = connectDb;
