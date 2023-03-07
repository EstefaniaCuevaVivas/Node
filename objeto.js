const fs = require("fs");
const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("¿Cuál es tu nombre? ", (name) => {
  rl.question("¿Cuál es tu apellido? ", (surname) => {
    rl.question("¿Cuál es tu edad? ", (age) => {
      let newUser = { name, surname, age};
      const jsonString = JSON.stringify(newUser);
      fs.writeFile( "objeto.json", 
        jsonString, (err) => {
          if (err) throw err;
          fs.readFile("objeto.json", (err, data) => {
            if (err) throw err;
            let newUser = JSON.parse(data);
            console.log(`Hola ${name} ${surname}, tienes ${age} años.`)
            rl.close();
          });
        }
      );
    });
  });
});
