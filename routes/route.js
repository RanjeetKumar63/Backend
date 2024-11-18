const express = require("express");
const router = express.Router();

// middlewares

const auth = function (req, res, next) {
  console.log("I am inside auth wala middleware");

  // tumhari sahayta ke liye ak dummy user add krata hun

  req.user = { userId: 1, role: "admin" };

  if (req.user) {
    // if a valid user is there in req,then proceed to next middleware
    next();
  } else {
    //if not a valid user
    res.json({
      success: false,
      Message: "Not a valid user",
    });
  }
};

const isStudent = function (req, res, next) {
  console.log("I am inside student wala middleware");

  if (req.user.role === "student") {
    next();
  } else {
    res.json({
      success: false,
      Message: "Access Denied,this route is only for students",
    });
  }
};
const isAdmin = function (req, res, next) {
  console.log("I am inside isAdmin wala middleware");

  if (req.user.role === "admin") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access denied,This route is only for Admins",
    });
  }
};
// routes
router.get("/student", auth, isStudent, (req, res) => {
  console.log("I am inside of route");
  res.send("Student specific page");
});
router.get("/admin", auth, isAdmin, (req, res) => {
  console.log("I am inside admin router");
  res.send("Admin specific page");
});

module.exports = router;
