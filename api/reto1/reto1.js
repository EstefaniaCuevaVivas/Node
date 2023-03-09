const { request, Router } = require('express');
const express = require('express');
const { get } = require('express/lib/response');
const app = express();

app.get('/',function(request,response){
  console.log(request.url)
  console.log(request.method)
  console.log(request.headers["user-agent"])
  console.log("Peticion recibida del cliente");
  response.status(200).json({ ok:true,message:"Recibido!"})
  
});


app.get('/bye',function(request,response){
  response.status(200).json({ ok:true,message:"Adios!"})
  
})


app.listen(4000)


