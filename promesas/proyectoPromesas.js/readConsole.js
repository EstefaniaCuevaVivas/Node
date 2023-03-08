const readline = require("readline");

function read(pregunta){

  const question = new Promise((resolve,reject)=>{
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(pregunta,(respuesta)=>{
      resolve(respuesta);
      rl.close();
    });
  });

  return question;

}

function readConsole(callback){
 persona = {nombre:"",apellido:"",age:""}
read("¿Cual es tu nombre?")
.then((nombre)=>{

  persona.nombre=nombre;

  return read("¿Cual es tu apellido?")

})
.then((apellido)=>{
  persona.apellido=apellido

  return read("¿Cual es tu edad?")
})
.then((age)=>{

  persona.age=age

  return callback(persona)
})
}
module.exports={readConsole}