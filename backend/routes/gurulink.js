import express from "express";
const router = express.Router();

import {
  getGurulink,
  updateGurulink,
  createGurulink,
  deleteGurulink,
} from "../handlers/gurulink.js";

// const { loginRequired, ensureAdmin } = require("../middleware/auth");

// router.route('/ts/:techsectionId').get(helpers.getGurulinks).post(helpers.createGurulink);
router.route("/ts/:techsectionId").post(createGurulink);
//   .post(loginRequired, ensureAdmin, createGurulink);

router.route("/:gurulinkId/ts/:techsectionId").delete(deleteGurulink);
//   .delete(loginRequired, ensureAdmin, helpers.deleteGurulink);

router.route("/:gurulinkId").get(getGurulink).put(updateGurulink);
//   .put(loginRequired, ensureAdmin, helpers.updateGurulink);

export default router;
