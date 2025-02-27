const express = require('express');
const {homeHandler,serveForm,addUser,listAll} = require('../controllers/controllers.js');
const {validateUser,checkDuplicate} = require('../middlewares/middlewares.js');
const { errorMessage } = require('../ui/ui.js');
const router = express.Router();

router.get('/',homeHandler);
router.get('/create',serveForm)
router.post('/add-user',validateUser,checkDuplicate,addUser)
router.get('/users',listAll)
router.use((req,res)=>{
    res.status(404).send(errorMessage('Not Found'))
})

module.exports = router