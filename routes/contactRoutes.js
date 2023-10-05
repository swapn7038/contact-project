const express = require("express");
const router = express.Router();

const {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");

router.route("/").get(getContacts).post(createContact);
// i added {} here
// that was showing error

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
