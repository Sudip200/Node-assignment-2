const express = require("express");
const {
  homeHandler,
  serveForm,
  addUser,
  listAll,
} = require("../controllers/controllers.js");
const {
  validateUser,
  checkDuplicate,
} = require("../middlewares/middlewares.js");
const { errorMessage } = require("../ui/ui.js");
const router = express.Router();
// showing home page message
router.get("/", homeHandler);
// showing form
router.get("/create", serveForm);
// add-users with middlewares
router.post("/add-user", validateUser, checkDuplicate, addUser);
// list all users
router.get("/users", listAll);
// handle 404 errors
router.use((req, res) => {
  res.status(404).send(errorMessage("Not Found"));
});

module.exports = router;
