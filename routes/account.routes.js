const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const router = express.Router();
const controller = require("../controllers/account.controller");

router.post("/", upload.single("image"), controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.get);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

module.exports = router;
