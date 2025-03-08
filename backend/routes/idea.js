import express from "express";
const router = express.Router();
import { getIdea, getIdeas, createIdea, deleteIdea } from "../handlers/idea.js";

router.route("/").get(getIdeas).post(createIdea);
router.route("/:ideaId").get(getIdea).delete(deleteIdea);

export default router;
