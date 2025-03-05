const fs = require("fs");
const path = require("path");
const { errorMessage } = require("../ui/ui");
// validate user
function validateUser(req, res, next) {
  try {
    // only alphabetic values
    const isValidName = (name) => /^[A-Za-z]+$/.test(name);
    console.log(req.body);
    if (req.body.firstname === "" || req.body.lastname === "") {
      res.send(
        errorMessage("Please Enter All fields", "/create", "Retry submit form")
      );
      return;
    } else if (
      !isValidName(req.body.firstname) ||
      !isValidName(req.body.lastname)
    ) {
      res.send(errorMessage("Name is invalid", "/create", "Retry submit form"));
      return;
    } else {
      next();
    }
  } catch (e) {
    res.status(500).send(errorMessage("Internal Server Error"));
  }
}
// check for duplicate
function checkDuplicate(req, res, next) {
  fs.readFile(path.join(__dirname, "..", "data", "data.json"), (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(errorMessage("Internal Server Error"));
      return;
    }
    try {
      let employeeArray = JSON.parse(data);
      for (let em of employeeArray) {
        // if fistname+lastname already exist
        if (
          em.firstName === req.body.firstname &&
          em.lastName === req.body.lastname
        ) {
          res.send(
            errorMessage(
              "User Already Registered",
              "/create",
              "Retry submit form"
            )
          );
          return;
        }
      }
      next();
    } catch (e) {
      res.status(500).send(errorMessage("Internal Server Error"));
      return;
    }
  });
}

module.exports = {
  validateUser,
  checkDuplicate,
};
