
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function readConsole(callback){
  rl.question("¿Cuál es tu nombre? ", (name) => {
    rl.question("¿Cuál es tu apellido? ", (surname) => {
      rl.question("¿Cuál es tu edad? ", (age) => {
        let newUser = { name:name, surname:surname, age:age};
        console.log(newUser)
        return callback(newUser)

      });
    });
  });
  
}


module.exports={readConsole}