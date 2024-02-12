const mongoose = require("mongoose");
const schema = mongoose.Schema;
const addflight = new schema(
  {
    flightnumber: {
      type: String,
    },
    flightimg: {
      type: String,
    },
    flightname: {
      type: String,
      required: true,
    },
    arrivaldate: {
      type: String,
      required: true,
    },
    arrivaltime: {
      type: String,
      required: true,
    },
    depaturedate: {
      type: String,
      required: true,
    },
    depaturetime: {
      type: String,
      required: true,
    },
    seats: {
      type: Number,

    },
    amount: {
      type: Number,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("addflight", addflight);
