const express = require('express');
const {homeHandler,serveForm,addUser} = require('../controllers/controllers.js')
const router = express.Router();

router.get('/',homeHandler);
router.get('/create',serveForm)
router.post('/add-user',addUser)

module.exports = router