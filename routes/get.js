const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.send({ status: 1, users: req.userData });
});

router.get("/user/:id", (req, res) => {
  const userid = Number(req.params.userid);

  //defensive checks
  //check userid is a number or not less than 1
  if (Number.isNaN(userid) || userid < 1) {
    res.send({ status: 0, reason: "Invalid userid" });
    return;
  }

  // copy and find specific user
  const _userData = [...req.userData];

  const user = _userData.find((char) => {
    return char.userid === userid;
  });

  // check user exists
  if (!user) {
    res.send({ status: 0, reason: "userid not found" });
  }

  res.send({ status: 1, user });
});

router.get("/useractions", (req, res) => {
  console.log(req);
  res.send({ status: 1, usersActions: req.userActions2 });
});

module.exports = router;
