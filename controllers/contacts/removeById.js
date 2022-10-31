const { Contact, User } = require("../../models");
const { NotFound } = require("http-errors");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  const contacts = await Contact.findOneAndRemove({
    _id: contactId,
    owner: _id,
  });
  if (!contacts) {
    throw new NotFound(`Product with id=${contactId} not found`);
  }
  const userUpdated = await User.findByIdAndUpdate(_id, {
    $pull: { userContacts: contactId },
  });
  if (userUpdated) {
    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
      data: {
        contacts,
      },
    });
  }
};

module.exports = removeById;
