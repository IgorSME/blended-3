const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  contact: {
    type: Schema.Types.ObjectId,
    ref: "contact",
    require: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
  imageNote: {
    type: String,
    default: "",
  },
});

const Note = model("note", noteSchema);

module.exports = {
  Note,
};
