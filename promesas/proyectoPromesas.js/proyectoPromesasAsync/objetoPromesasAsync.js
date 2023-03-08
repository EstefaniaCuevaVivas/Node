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


async function primerAsync(){
  let persona = {
    nombre:"",
    apellido:"",
    age: 0
  }
 try{

  persona.nombre =  await read ("¿Cual es tu nombre?"),
  persona.apellido = await read ("¿Cual es tu apellido?"),
  persona.age = await read ("¿Cual es tu edad?"),

  await fs.writeFile('persona.json', JSON.stringify(persona))

  const nuevo = await fs.readFile('persona.json','utf8')

  console.log(JSON.parse(nuevo))

 }catch(error){
  console.log(error)
 }
 
}

primerAsync()