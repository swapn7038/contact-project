// 1

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = async (req, res) => {
  res.status(200).json({ message: "Get contacts" });
};

// 2

//@desc create all contacts
//@route POST /api/contacts
//@access public
const createContact = async (req, res) => {
  console.log("The request body is", req.body); // use comma here, not plus sign not backticks
  const { name, address, phoneno } = req.body;
  if (!name || !address || !phoneno) {
    res.status(400);
    throw Error("All fields are mandatory !");
  }
  res.status(201).json({ message: "Create contacts" });
};

// 3 get contacts

//@desc Get contacts
//@route POST /api/contacts/:id
//@access public
const getContact = async (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};

// 4 update contacts

//@desc update contacts
//@route PUT /api/contacts/:id
//@access public
const updateContact = async (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
};

// 5 delete contacts

//@desc delete contacts
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
