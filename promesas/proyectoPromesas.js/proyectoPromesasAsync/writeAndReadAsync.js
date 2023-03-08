const fs = require('fs/promises');

async function writeAndReadAsync(path,obj){
  
  
    try{
      await fs.writeFile(path, JSON.stringify(obj))

      const nuevo2 = await fs.readFile(path,'utf8')
  
      console.log(JSON.parse(nuevo2))
    }catch(error){
      console.log(error)
    }

  
   
  
}

module.exports={writeAndReadAsync}