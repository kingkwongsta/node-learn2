//@desc get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
  res.status(200).json({ message: "Getting contact" });
};

//@desc get a contact
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
  res.status(200).json({ message: `Update contact - ${req.params.id}` });
};

//@desc create contact
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
  res.status(200).json({ message: "Creating contact" });
};

//@desc update contact
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact - ${req.params.id}` });
};

//@desc delete contact
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact - ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
