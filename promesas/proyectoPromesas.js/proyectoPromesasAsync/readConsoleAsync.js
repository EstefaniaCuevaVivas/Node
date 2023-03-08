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

async function readConsoleAsync(callback){
  persona = {nombre:"",apellido:"",age:""}

    try{

      persona.nombre =  await read ("¿Cual es tu nombre?");
      persona.apellido = await read ("¿Cual es tu apellido?");
      persona.age = await read ("¿Cual es tu edad?");
      callback(persona);
    }catch(error){
      console.log(error)
    }


  
  
  
  
   
  
}



module.exports={readConsoleAsync}