const { User, Note } = require("../../models");

const add = async (req, res) => {
  const { _id } = req.user;
  const note = await Note.create({ ...req.body, owner: _id });
  if (note) {
    const user = await User.findByIdAndUpdate(_id, {
      $push: { userNote: note._id },
    });
    if (user) {
      res.status(201).json({ note });
    }
  }
  // const user = await User.findById()
};

module.exports = add;
