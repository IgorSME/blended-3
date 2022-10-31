const { User, Note } = require("../../models");

const add = async (req, res) => {
  const { _id } = req.user;

  const data = req.file ? { ...req.body, imageNote: req.file.path } : req.body;
  const note = await Note.create({ ...data, owner: _id });
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
