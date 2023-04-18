const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "Getting contact" });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Get contact - ${req.params.id}` });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "Creating contact" });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update contact - ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete contact - ${req.params.id}` });
});

module.exports = router;
