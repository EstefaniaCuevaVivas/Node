const readC = require("./readConsole");
const writeAndRead = require("./writeAndReadObject")

readC.readConsole(newUser=>(writeAndRead.writeAndRead("./nuevoObjeto.json",newUser)))