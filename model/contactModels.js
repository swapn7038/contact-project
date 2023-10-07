const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const contactSchemas = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Phone number"],
    },

    email: {
      type: String,
      required: [true, "Please enter email address"],
    },

    phone: {
      type: String,
      required: [true, "Please enter email address"],
    },
  },
  {
    timestamp: true,
  }
);

export.default = mongoose.
