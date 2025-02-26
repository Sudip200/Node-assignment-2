
function validateUser(req,res,next){
    let alphabetRegex = `/^[A-Za-z]+$/`
  console.log(req.body)
 if(req.body.firstname=='' || req.body.lastname == '' 
){
    res.send('Please enter all values ')
 }
 else{
    next()
 }
 
}
module.exports={
    validateUser
}