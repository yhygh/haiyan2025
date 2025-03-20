import { Idea } from "../models/idea.js";

// /api/ideas/:ideaId
const getIdea = async function (req, res, next) {
  try {
    let foundIdea = await Idea.findById(req.params.ideaId);
    return res.status(200).json(foundIdea);
  } catch (err) {
    return next(err);
  }
};

const getIdeas = async function (req, res, next) {
  try {
    let ideas = await Idea.find();
    return res.status(200).json(ideas);
  } catch (err) {
    return next(err);
  }
};

const createIdea = async function (req, res, next) {
  console.log(`\n ----------------req.body = `);
  console.log(req.body);
  console.log(`--------------------\n`);
  try {
    let newIdea = await Idea.create(req.body);
    return res.status(201).json(newIdea);
  } catch (err) {
    return next(err);
  }
};

// /api/ideas/:ideaId
const deleteIdea = async function (req, res, next) {
  console.log(
    `\n backend, deleteIdea req.params = ${JSON.stringify(req.params)}`
  );
  // console.log(req.params);
  try {
    let foundIdea = await Idea.findByIdAndDelete(req.params.ideaId);
    return res.status(200).json(foundIdea);
  } catch (err) {
    return next(err);
  }
};

export { getIdea, getIdeas, createIdea, deleteIdea };
