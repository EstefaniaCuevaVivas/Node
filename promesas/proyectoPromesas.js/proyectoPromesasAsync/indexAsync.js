const readC = require("./readConsoleAsync");
const writeAndRead = require("./writeAndReadAsync")

readC.readConsoleAsync(persona=>(writeAndRead.writeAndReadAsync("./nuevoObjetoAsync2.json", persona)))