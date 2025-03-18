import { Techsection } from "../models/index.js";

// /api/ts
// To test using httpie
//     http GET localhost:3000/api/ts "Authorization:Bearer token"
const getTechsections = async function (req, res, next) {
  console.log(`reaching backend ... getTechSections ...`);
  try {
    let techSections = await Techsection.find().populate("links").exec();
    console.log("Populated techSections:", techSections);
    return res.status(200).json(techSections);
  } catch (err) {
    console.error(`what happend ? ...`);
    return next({
      status: 500,
      message: "Error fetching tech sections",
      error: err.message,
    });
  }
};

// /api/ts
// To test using httpie
//    http POST localhost:3000/api/ts
//    "Authorization:Bearer token" name="something"
const createTechsection = async function (req, res, next) {
  // console.log(req.body);
  try {
    let newTechsection = await Techsection.create(req.body);
    return res.status(201).json(newTechsection);
  } catch (err) {
    return next(err);
  }
};

// /api/ts/:techsectionId
// To test using httpie
const getTechsection = async function (req, res, next) {
  try {
    let foundTechsection = await Techsection.findById(
      req.params.techsectionId
    ).populate("links");
    return res.status(200).json(foundTechsection);
  } catch (err) {
    return next(err);
  }
};

// /api/ts/:techsectionId
// To test using httpie
//    http PUT localhost:4000/api/ts/5f7f6e80c64f48fcd4699a51 "Authorization:Bearer token" name="something" links:='["5f7643326b330071aa57c92a"]
//    Notice the syntax using := instead of =
const updateTechsection = async function (req, res, next) {
  try {
    let techSection = await Techsection.findByIdAndUpdate(
      { _id: req.params.techsectionId },
      req.body,
      {
        new: true,
      }
    );
    return res.status(200).json(techSection);
  } catch (err) {
    return next(err);
  }
};

// /api/ts/:techsectionId
// To test using httpie
//    http DELETE localhost:4000/api/ts/5f7f5fc236916ffc0160f2b1 "Authorization:Bearer token"
const deleteTechsection = async function (req, res, next) {
  try {
    let foundTechsection = await Techsection.findByIdAndDelete({
      _id: req.params.techsectionId,
    });
    return res.status(200).json(foundTechsection);
  } catch (err) {
    return next(err);
  }
};

export {
  createTechsection,
  getTechsections,
  getTechsection,
  updateTechsection,
  deleteTechsection,
};
