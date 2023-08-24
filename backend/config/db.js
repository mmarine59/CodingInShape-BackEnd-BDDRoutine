const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb+srv://malikgaetanmarine:CiS21082023@malikgaetanmarine.lojlyvo.mongodb.net/codinginshape");
      console.log("Mongo connecté")
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;

