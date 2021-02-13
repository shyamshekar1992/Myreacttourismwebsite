const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
  address: String,
  imageUrl: String,
  purchased: [String],


  cart: [{ ref: "Myplaces", type: Schema.Types.ObjectId }],
},

  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;