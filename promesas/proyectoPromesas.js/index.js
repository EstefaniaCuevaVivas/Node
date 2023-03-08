const readC = require("./readConsole");
const writeAndRead = require("./writeAndRead")

readC.readConsole(persona=>(writeAndRead.writeAndRead("./nuevoObjeto2.json", persona)))