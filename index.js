// require(); use for any :__ when we are including any object or modules then we are using require();

// this is using for  express include
const express = require("express");
// initialize for app
const app = express();

// variable that store the port number
const port = 3000;

// loading middleware into the app
// only you can see inbuilt middleware
app.use(express.json());

// //middleware -logging ,auth, validation

// // creation of a middleware
// const logginMiddleware = function (req, res, next) {
//   console.log("Logging kr rha hun");
//   next();
// };
// //loading middlerware into application
// app.use(logginMiddleware);
// const authMiddleware = function (req, res, next) {
//   console.log("Authentication kr rha hun");
//   next();
// };
// app.use(authMiddleware);

// const validationMiddleware = function (req, res, next) {
//   console.log("Validation kr rha hun");
//   next();
// };
// app.use(validationMiddleware);

const route = require("./routes/route");
// mounting the routes
app.use("/api", route);

// if i'm going:-- "/api/student" then we are arrived student
// request
app.get("/", (req, res) => {
  console.log("mai router handler hun");
  console.log(req.body);
  res.send("Hello Jee");
});

// start ur app or server

app.listen(port, () => {
  console.log(`Application start ho gyi hai ${port}`);
});
