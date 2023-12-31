// import expressAsyncHandler from "express-async-handler";
// import { BSONRegExp } from "mongodb";

const expressAsyncHandler = require("express-async-handler");
const Contact = require("../model/contactModels");

// 1

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = expressAsyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// 2

//@desc create all contacts
//@route POST /api/contacts
//@access public
const createContact = expressAsyncHandler(async (req, res) => {
  console.log("The request body is", req.body); // use comma here, not plus sign not backticks
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw Error("All fields are mandatory !");
  }
  const contact = await Contact.create({ name, email, phone });
  // res.status(201).json(contacts);
  res.status(201).json(contact);
});

// 3 get contacts

//@desc Get contacts
//@route POST /api/contacts/:id
//@access public
const getContact = expressAsyncHandler(async (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });

  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    // res.status(404);
    throw new Error("Contact not found");
  }

  res.status(200).json(contact);
});

// 4 update contacts

//@desc update contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = expressAsyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }

  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updateContact);
});

// 5 delete contacts

//@desc delete contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = expressAsyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("contact not found");
  }

  await Contact.remove();

  res.status(200).json(contact);
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
