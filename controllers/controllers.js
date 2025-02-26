const express = require('express');
const path = require('path');
const fs = require('fs');

function homeHandler(req,res){
    res.send('Welcome to the User Management System');
}
function serveForm(req,res){
   res.sendFile(path.join(__dirname,'../','views','createuser.html'))
}
function addUser(req,res){
   let firstName = req.body.firstname;
   let lastName = req.body.lastname;
   console.log()
   fs.readFile(path.join(__dirname,'../','data','data.json'),(err,data)=>{
     let jsObj = JSON.parse(data);
     jsObj.push({firstName,lastName})
     console.log(jsObj)
    fs.writeFile(path.join(__dirname,'../','data','data.json'),JSON.stringify(jsObj),(err)=>{
       res.send('submitted')
    })

   })
}
module.exports = {
    homeHandler,
    serveForm,
    addUser
}