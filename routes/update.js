const express = require("express");
const router = express.Router();

router.patch("/user/:id", (req, res) => {
  const userid = Number(req.params.userid);

  //check userid is a number
  if (Number.isNaN(userid) || userid < 1) {
    res.send({ status: 0, reason: "Invalid userid" });
    return;
  }

  const { name, email, password } = req.body;

  const indexOf = req.userData.findIndex((item) => {
    return item.userid === userid;
  });

  // check user exists
  if (indexOf === -1) {
    res.send({ status: 0, reason: "userid not found" });
    return;
  }

  //repitition for security
  if (name && typeof name === "string") {
    req.userData[indexOf].name = name;
  }

  if (email && typeof email === "string") {
    req.userData[indexOf].email = email;
  }

  if (password) {
    req.userData[indexOf].password = password;
  }

  res.send({ status: 1 });
});

module.exports = router;
