const express = require('express');
const {homeHandler,serveForm,addUser} = require('../controllers/controllers.js');
const {validateUser} = require('../middlewares/middlewares.js');
const router = express.Router();

router.get('/',homeHandler);
router.get('/create',serveForm)
router.post('/add-user',validateUser,addUser)

module.exports = router