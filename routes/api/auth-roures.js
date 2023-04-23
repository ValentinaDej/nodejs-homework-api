const express = require("express");

const { authentificate, upload } = require("../../middlewares");
const ctrl = require("../../controllers/auth-controllers.js");
const { validateBody } = require("../../utils");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/current", authentificate, ctrl.getCurrent);
router.post("/logout", authentificate, ctrl.logout);
router.patch(
  "/:id/subscription",
  authentificate,
  validateBody(schemas.updateSubscriptionSchema),
  ctrl.updateSubscription
);
router.patch(
  "/avatars",
  authentificate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;
