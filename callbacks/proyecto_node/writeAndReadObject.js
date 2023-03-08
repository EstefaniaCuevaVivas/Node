const fs = require("fs");


function writeAndRead(path,obj){

  fs.writeFile( path, JSON.stringify(obj), (err) => {
    if (err) throw err;
      fs.readFile(path, (err, data) => {
        if (err) throw err;
        JSON.parse(data)
        process.exit();
    });
  });
}

module.exports={writeAndRead}

// writeAndRead("./objeto.json",{name:"maria",surname:"garcia",age:35})