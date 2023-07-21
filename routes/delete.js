const express = require("express");
const router = express.Router();

router.delete("/user/:id", (req, res) => {
  const id = req.params.id;

  //defensive checks
  //check id is a number or not less than 1
  if (isNaN(id) || id < 1) {
    res.send({ status: 0, reason: "Invalid ID" });
    return;
  }

  // copy and find specific user
  const indexOf = req.userData.findIndex((item) => {
    return item.id === id;
  });

  if (indexOf < 0) {
    res.send({ status: 0, reason: "Id not found, potentially deleted" });
  }

  req.userData.splice(indexOf, 1);

  res.send({ status: 1 });
});

module.exports = router;
