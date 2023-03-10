const Book =  require("../models/book")

let book=null
let book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'tapa blanda',60,"url",34,4);
let book2 = new Book('To Kill a Mockingbird', 'Harper Lee','tapa blanda',60,"url", 7,4);
let book3 = new Book('1984', 'George Orwell','tapa blanda',45,"url",5,5);

let books=[book1,book2,book3]


function getStart(request,response){
  let respuesta={error:true,codigo:200,mensaje:"Punto de inicio"};
  response.send(respuesta);
}

function getBook(request,response){

  let respuesta;

  if(books)
    respuesta={error:false,codigo:200,data:books}
  else
    respuesta={error:true,codigo:200,mensaje:"El libro no existe"}  
   
  response.send(respuesta);  
}


function getBookOne(request,response){

  let Id = request.query.id;

  let bookFound = books.find(book => book.id_book==Id);
  let respuesta;
  if(books.length != 0 && (!Id || bookFound != undefined))

   if(bookFound != undefined){

    respuesta={error:false,codigo:200,data:bookFound}

   } else{

    respuesta= {error:false,codigo:200,data:books}     
   }
  
  else{
    respuesta={error:true,codigo:200,mensaje:"El libro no existe"}  
   }
    
   
  response.send(respuesta);  
}


function postBook(request, response)
{

    let respuesta; 
    console.log(request.body)
    if (book === null)
    {
         book = new Book (request.body.title,request.body.author,request.body.type,request.body.price,request.body.photo,request.body.id_book,request.body.id_user)
        
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'libro creado',data: book};
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'El libro ya existe'};
      
    books.push(book)                    

    response.send(respuesta);
}

function putBook(request, response)
{

    let editBook = books.findIndex(book=>book.id_book == request.body.id_book)
    let respuesta
    if (editBook != -1)
    {
      books[editBook].title  = request.body.title;
      books[editBook].author = request.body.author;
      books[editBook].type = request.body.type;
      books[editBook].price  =request.body.price;
      books[editBook].photo = request.body.photo;
      books[editBook].id_book = request.body.id_book;
      books[editBook].id_user = request.body.id_user;

        respuesta           = {error: false, codigo: 200, 
                                mensaje: 'libro actualizado',data: books[editBook]};
    }
    else
        respuesta = {error: true, codigo: 200, 
                        mensaje: 'El libro no existe',data: books};

                      


    response.send(respuesta);
};

function deleteBook(request, response)
{
  let deleteBook= books.findIndex(book => book.id_book == request.body.id_book)
    let respuesta
    if (deleteBook != null)
    {    
        books.splice(deleteBook,1)  
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Libro borrado',data: book[deleteBook]};
    }  
    else
        respuesta   = {error: true, codigo: 200, 
                        mensaje: 'El Libro no existe',data: book[deleteBook]};

                    

    response.send(respuesta);
};

module.exports = {getStart, getBook,getBookOne, postBook, putBook, deleteBook};
