const express = require("express");
// const { default: errorHandler } = require("./middleware/errorHandler");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
// app.use(errorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
