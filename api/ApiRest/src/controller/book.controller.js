const Book =  require("../models/book")

let book = null

function getStart(request,response){
  let respuesta={error:true,codigo:200,mensaje:"Punto de inicio"};
  response.send(respuesta);
}

function getBook(request,response){
  let respuesta;
  if(book !=null)
    respuesta={error:false,codigo:200,data:book}
  else
    respuesta={error:true,codigo:200,mensaje:"El libro no existe"}  
   
  response.send(respuesta);  
}


function postBook(request, response)
{
    let respuesta; 
    console.log(request.body)
    if (book === null)
    {
         book     = new Book (request.body.title,request.body.author,request.body.type,request.body.price,request.body.photo,request.body.id_book,request.body.id_user)
        
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'libro creado',data: book};
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'El libro ya existe'};

    response.send(respuesta);
}

function putBook(request, response)
{
    let respuesta
    if (book !=  null)
    {
        book.title  = request.body.title;
        book.author = request.body.author;
        book.type = request.body.type;
        book.price  =request.body.price;
        book.photo = request.body.photo;
        book.id_book = request.body.id_book;
        book.id_user = request.body.id_user;

        respuesta           = {error: false, codigo: 200, 
                                mensaje: 'libro actualizado',data: book};
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'El libro no existe',data: book};

    response.send(respuesta);
};

function deleteBook(request, response)
{
    let respuesta
    if (book != null)
    {    
        book     = null;
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Libro borrado',data: book};
    }  
    else
        respuesta   = {error: true, codigo: 200, 
                        mensaje: 'El Libro no existe',data: book};

    response.send(respuesta);
};

module.exports = {getStart, getBook, postBook, putBook, deleteBook};
