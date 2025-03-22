// TO import or export from mongodb, useful for backup
// Currently, import data from a json file into a mongodb
//require("dotenv").config();

// import data from "./techData.json" assert { type: "json" };
// const data = await import("./techData.json", { assert: { type: "json" } });

import fs from "fs";
const data = JSON.parse(fs.readFileSync("./techData.json"));
console.log(data.name);

import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/haiyandb")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

import { Gurulink, Techsection } from "./models/index.js";

function seedDB() {
  Gurulink.deleteMany()
    .then(() => {
      console.log("Removed all guru links!");
      return Techsection.deleteMany();
    })
    .then(() => {
      console.log("Removed all tech sections!");

      //   data.forEach((seed) => {
      const promises = data.map((seed) => {
        const tstitle = { name: seed.title };
        let createdTS = null;
        return Techsection.create(tstitle)
          .then((ts) => {
            console.log("tech section created!");
            createdTS = ts;

            const gurulinks = seed.links.map((link) => ({
              title: link.title,
              url: link.url,
              comment: link.comment,
            }));
            console.log("prepare gurulinks ... ");
            console.log(gurulinks);

            return Gurulink.insertMany(gurulinks);
          })
          .then((gurulinks) => {
            console.log("guru links created! ...");
            console.log(gurulinks);

            gurulinks.forEach((item) => createdTS.links.push(item._id));

            return createdTS.save();
          });
      });

      return Promise.all(promises);
    })
    .then(() => {
      console.log("Data from seed loaded. Closing database connection.");
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      mongoose.connection.close();
    });
}

seedDB();
