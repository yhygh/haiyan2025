// TO import or export from mongodb, useful for backup
// Currently, import data from a json file into a mongodb
//require("dotenv").config();


import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/haiyandb")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

import { User } from "./models/index.js";

function seedDB() {
  User.deleteMany()
    .then(() => {
      console.log("Removed all users!");
      const newUser = new User({email: 'usr@gmail.com', password:'plaintext', username:'usr'});
      return newUser.save();
    })
    .then((usr) => {
      console.log("added user:", usr);
      console.log("Data from seed loaded. Closing database connection.");
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      mongoose.connection.close();
    });
}

await seedDB();
