const mongo = require('mongoose');
const schema = mongo.Schema
const user = new schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    mobileno: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      enum: ['male', 'female',],
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongo.model("users", user);
