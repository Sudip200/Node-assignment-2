const express = require('express');
const path = require('path')

function homeHandler(req,res){
    res.send('Welcome to the User Management System');
}
function serveForm(req,res){
   res.sendFile(path.join(__dirname,'../','views','createuser.html'))
}
function addUser(req,res){
   
}
module.exports = {
    homeHandler,
    serveForm,
    addUser
}