const express = require("express");
// const { default: errorHandler } = require("./middleware/errorHandler");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnect");
const dotenv = require("dotenv").config();
// import connectDb from "./config/dbConnect";
// const connectDb = require("./config/dbConnect");

const app = express();

const port = process.env.PORT || 5000;

connectDb();

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
// app.use(errorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// GBgcWzRuK7R4mYUX
// mongodb+srv://swapycodes:<password>@contactapp.k1enoje.mongodb.net/
