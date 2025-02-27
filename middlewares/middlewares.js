const fs = require('fs');
const path = require('path');
const { normalMessage, errorMessage } = require('../ui/ui');

function validateUser(req, res, next) {
    try{
    const isValidName = (name) => /^[A-Za-z]+$/.test(name);
    console.log(req.body)
    if (req.body.firstname === '' || req.body.lastname === '') {
        res.send(errorMessage('Please Enter All fields'))
        return
    } else if (!isValidName(req.body.firstname) || !isValidName(req.body.lastname)) {
        res.send(errorMessage('Name can not be number'))
        return
    }
    else {
        next()
    }
}catch(e){
    res.status(500).send(errorMessage('Internal Server Error'))
}
}
function checkDuplicate(req,res,next){
   fs.readFile(path.join(__dirname,'..','data','data.json'),(err,data)=>{
         if(err){
             console.log(err)
             res.status(500).send(errorMessage('Internal Server Error'))
             return
         }
        try{
         let employeeArray = JSON.parse(data);
         for (let em of employeeArray){
             if(em.firstName===req.body.firstname || em.lastName === req.body.lastname){
             res.send(normalMessage('User Already Registered'));
              return
             }
         }
         next()
        }catch(e){
            res.status(500).send(errorMessage('Internal Server Error'))
            return
        }
        
   })
}

module.exports = {
    validateUser,
    checkDuplicate
}