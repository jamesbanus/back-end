const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.send({ status: 1, users: req.userData });
});

router.get("/user/:id", (req, res) => {
  const id = Number(req.params.id);

  //defensive checks
  //check id is a number or not less than 1
  if (Number.isNaN(id) || id < 1) {
    res.send({ status: 0, reason: "Invalid ID" });
    return;
  }

  // copy and find specific user
  const _userData = [...req.userData];

  const user = _userData.find((char) => {
    return char.id === id;
  });

  // check user exists
  if (!user) {
    res.send({ status: 0, reason: "ID not found" });
  }

  res.send({ status: 1, user });
});

module.exports = router;
