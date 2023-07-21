const express = require("express");
const router = express.Router();

router.patch("/user/:id", (req, res) => {
  console.log(req.body, req.params.id);

  const id = Number(req.params.id);

  //check id is a number
  if (Number.isNaN(id) || id < 1) {
    res.send({ status: 0, reason: "Invalid ID" });
    return;
  }

  const { name, email } = req.body;

  const indexOf = req.userData.findIndex((item) => {
    return item.id === id;
  });

  // check user exists
  if (indexOf < 0) {
    res.send({ status: 0, reason: "ID not found" });
    return;
  }

  //repitition for security
  if (name && typeof name === "string") {
    req.userData[indexOf].name = name;
  }

  if (email && typeof email === "string") {
    req.userData[indexOf].email = email;
  }

  res.send({ status: 1 });

  console.log(indexOf);
});

module.exports = router;
