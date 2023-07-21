const express = require("express");
const router = express.Router();

router.post("/user", (req, res) => {
  const { name, email } = req.body;

  //check contents
  if (
    !name ||
    !email ||
    typeof name !== "string" ||
    typeof email !== "string"
  ) {
    res.send({ status: 0, reason: "Incomplete Request" });
    return;
  }

  //check for duplicates
  const indexOf = req.userData.findIndex((item) => {
    return item.name === name || item.email === email;
  });

  if (indexOf > -1) {
    res.send({ status: 0, reason: "Duplicate Entry" });
    return;
  }

  req.userData.push({ id: Math.round(Math.random() * 100000000), name, email });

  res.send({ status: 1 });
});

module.exports = router;
