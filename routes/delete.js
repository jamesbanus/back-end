const express = require("express");
const router = express.Router();

router.delete("/user/:id", (req, res) => {
  const userid = Number(req.params.id);

  //defensive checks
  //check userid is a number or not less than 1
  if (isNaN(userid) || userid < 1) {
    // console.log(userid);
    res.send({ status: 0, reason: "Invalid userid" });
    return;
  }

  // copy and find specific user
  const indexOf = req.userData.findIndex((item) => {
    return item.userid === userid;
  });

  if (indexOf < 0) {
    res.send({ status: 0, reason: "userid not found, potentially deleted" });
    return;
  }

  req.userData.splice(indexOf, 1);

  const result = req.userActions2.filter((item) => {
    console.log(item.userid, userid, item.userid !== userid);
    return item.userid !== userid;
  });

  req.userActions2 = result;

  res.send({ status: 1, data: req.userActions2 });
});

module.exports = router;
