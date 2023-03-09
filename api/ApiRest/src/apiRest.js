const app = require("./app")

app.listen(app.get("port"),function(){
  console.log("serve listen on port" + app.get("port"))
})

