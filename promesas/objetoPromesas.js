const fs = require('fs/promises');
const readline = require('readline')
const { Agent } = require('http');

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

let persona = {
  nombre:"",
  apellido:"",
  age:0
}

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

  return fs.writeFile('persona.json', JSON.stringify(persona))

.then(()=>{
  return fs.readFile('persona.json','utf8')
})

.then(data =>{
  console.log(JSON.parse(data));
})

.catch(err=>{
  console.log(err);
})

}
   
)