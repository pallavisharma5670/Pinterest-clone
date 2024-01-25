const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  users:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  title: String,
  description: String,
  image: String

});


module.exports = mongoose.model("post",postSchema);