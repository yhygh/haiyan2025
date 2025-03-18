import express from "express";
const router = express.Router();
import { getIdea, getIdeas, createIdea, deleteIdea } from "../handlers/idea.js";
import { loginRequired } from "../middleware/auth.js";

router.route("/").get(getIdeas).post(loginRequired, createIdea);
router.route("/:ideaId").get(getIdea).delete(loginRequired, deleteIdea);

export default router;
