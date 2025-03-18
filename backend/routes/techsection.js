import express from "express";
const router = express.Router();
import {
  getTechsection,
  getTechsections,
  updateTechsection,
  createTechsection,
  deleteTechsection,
} from "../handlers/techsection.js";
import { loginRequired, ensureAdmin } from "../middleware/auth.js";

router
  .route("/")
  .get(getTechsections)
  .post(loginRequired, ensureAdmin, createTechsection);
router
  .route("/:techsectionId")
  .get(getTechsection)
  .put(loginRequired, updateTechsection)
  .delete(loginRequired, ensureAdmin, deleteTechsection);

export default router;
