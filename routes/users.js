const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');
mongoose.connect("mongodb://localhost:27017/pin");

const userSchema = mongoose.Schema({
  username: String,
  fullname: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  /*boards: {
    type: Array,
    default: []
  }*/
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

userSchema.plugin(plm);

module.exports = mongoose.model("users",userSchema);