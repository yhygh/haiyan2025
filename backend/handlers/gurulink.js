import { Gurulink, Techsection } from "../models/index.js";

// /api/gl/ts/:techsectionId
// test using httpie
//     http POST localhost:3000/api/gl/ts/5f7f6e80c64f48fcd4699a51
//     "Authorization:Bearer token" title="sometitle" url="http://www.python.test"
const createGurulink = async function (req, res, next) {
  try {
    let newLink = await Gurulink.create(req.body);
    let foundTechsection = await Techsection.findById(req.params.techsectionId);
    foundTechsection.links.push(newLink);
    await foundTechsection.save();
    return res.status(201).json(newLink);
  } catch (err) {
    return next({
      status: 500,
      message: "Error creating guru link",
      error: err.message,
    });
  }
};

// /api/gl/:gurulinkId
// test using httpie
//    http GET localhost:3000/api/gl/5f7643326b330071aa57c92a
//    "Authorization:Bearer token"
const getGurulink = async function (req, res, next) {
  try {
    let foundGurulink = await Gurulink.findById(req.params.gurulinkId);
    return res.status(200).json(foundGurulink);
  } catch (err) {
    return next(err);
  }
};

// /api/gl/:gurulinkId
// test using httpie
//      http PUT localhost:3000/api/gl/5f7f874cdb3399ffcc78e56d
//      "Authorization:Bearer token" title="updated title" url="newurl"
const updateGurulink = async function (req, res, next) {
  try {
    let gurulink = await Gurulink.findByIdAndUpdate(
      { _id: req.params.gurulinkId },
      req.body,
      { new: true }
    );
    return res.status(200).json(gurulink);
  } catch (err) {
    return next(err);
  }
};

// /api/gl/:gurulinkId/ts/:techsectionId
// test using httpie
//    http DELETE localhost:3000/api/gl/5f7f863955633eff920f0c72/ts/5f7f6e80c64f48fcd4699a51
//    "Authorization:Bearer token"
const deleteGurulink = async function (req, res, next) {
  try {
    let foundTechsection = await Techsection.findById(req.params.techsectionId);
    let foundGurulink = await Gurulink.findByIdAndDelete({
      _id: req.params.gurulinkId,
    });
    const pos = foundTechsection.links.indexOf(req.params.gurulinkId);
    foundTechsection.links.splice(pos, 1);
    foundTechsection.save();
    res.status(200).json(foundGurulink);
  } catch (err) {
    return next(err);
  }
};

export { createGurulink, getGurulink, updateGurulink, deleteGurulink };
