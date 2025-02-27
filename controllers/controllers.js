const express = require('express');
const path = require('path');
const fs = require('fs');
const { normalMessage, errorMessage ,listUsersdata} = require('../ui/ui')

function homeHandler(req,res){
    res.status(200).send(normalMessage('Welcome to the User Management System'));
}
function serveForm(req,res){
   res.sendFile(path.join(__dirname,'../','views','createuser.html'))
}
function addUser(req,res){
   try{let firstName = req.body.firstname;
   let lastName = req.body.lastname;
   fs.readFile(path.join(__dirname,'../','data','data.json'),(err,data)=>{
     let jsObj = JSON.parse(data);
     jsObj.push({firstName,lastName})
     console.log(jsObj)
     fs.writeFile(path.join(__dirname,'../','data','data.json'),JSON.stringify(jsObj),(err)=>{
       res.send(normalMessage('User submitted'))
    })
   })
}catch(e){
   res.status(500).send(errorMessage('Internal Server Error'))
   return
}
}
function listAll(req,res){
    fs.readFile(path.join(__dirname,'../','data','data.json'),(err,data)=>{
       if(err){
         console.log(err)
         res.status(500).send(errorMessage('Internal Server Error'))
         return
       }
       try{
       const employeeArray = JSON.parse(data.toString());
       console.log(employeeArray)
       if(employeeArray.length === 0){
          res.redirect('/create')
          return 
       }
       res.status(200).send(listUsersdata(employeeArray))
      }catch(e){
         res.status(500).send(errorMessage('Internal Server Error'))
         return
      }



    }
   )
}
module.exports = {
    homeHandler,
    serveForm,
    addUser,
    listAll
}