const { Note } = require("../../models");

const getById = async (req, res) => {
  const { noteId } = req.params;
  const { _id } = req.user;
  const note = await Note.findOne({ owner: _id, _id: noteId }).populate(
    "contact",
    {
      email: true,
      name: true,
      phone: true,
    }
  );
  if (note) {
    res.json(note);
  }
};

module.exports = getById;
