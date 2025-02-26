const express  = require('express');
const path = require('path');
const routers= require('./routes/routes')
const app = express()
app.use(express.static(path.join(__dirname,'public')))
app.use(routers)
app.listen(3000,()=>{
    console.log('Server running on port 3000')
})