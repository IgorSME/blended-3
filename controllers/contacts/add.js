const { Contact, User } = require("../../models");

const add = async (req, res) => {
  const { _id } = req.user;
  const result = await Contact.create({ ...req.body, owner: _id });
  if (result) {
    const userUpdated = await User.findByIdAndUpdate(_id, {
      $push: { userContacts: result._id },
    });
    if (userUpdated) {
      res.status(201).json({
        status: "success",
        code: 201,
        data: {
          result,
        },
      });
    }
  }
};

module.exports = add;
