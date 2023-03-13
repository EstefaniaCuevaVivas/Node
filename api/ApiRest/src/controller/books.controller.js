const Book =  require("../models/book")

let book=null

let book1  = new Book ("El niño con el pijama de rayas","Tapa blanda","John Boyne",39,"https://m.media-amazon.com/images/I/512ndU0-S+L.jpg",60,24);
let book2  = new Book ("Harry Potter","Tapa dura","J. k. Rowling",45,"https://static.posters.cz/image/1300/posters/harry-potter-la-piedra-filosofal-i104639.jpg",45,68);
let book3  = new Book ("Codigo Da Vinci","Tapa dura","Dan Brown",20,"https://m.media-amazon.com/images/I/A1IH+BJHY3L.jpg",33,15)
let books=[book1,book2,book3]


function getStart(request,response){
  let respuesta={error:true,codigo:200,mensaje:"Punto de inicio"};
  response.send(respuesta);
}

// function getBook(request,response){

//   let respuesta;

//   if(books)
//     respuesta={error:false,codigo:200,data:books}
//   else
//     respuesta={error:true,codigo:200,mensaje:"El libro no existe"}  
   
//   response.send(respuesta);  
// }


function getBookOne(request,response){

  let Id = request.query.id;

  let bookFound = books.find(book => book.id_book==Id);
  let respuesta;
  if(books.length != 0 && (!Id || bookFound != undefined))

   if(bookFound != undefined){

    respuesta={error:false,codigo:200,mensaje:"El libro encintrado",data:[bookFound]}

   } else{

    respuesta= {error:false,codigo:200,mensaje:"mostrado libros",data:books}     
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
let id = request.body.id_book
console.log(id);

  let deleteBook= books.findIndex(book => book.id_book == id)
    let respuesta
    console.log(deleteBook);

    if (deleteBook != -1)
    {    
        books.splice(deleteBook,1) 
        console.log(books); 
        respuesta   = {error: false, codigo: 200, 
                        mensaje: 'Libro borrado',data: books};
    }  
    else
        respuesta   = {error: true, codigo: 200, 
                        mensaje: 'El Libro no existe',data: books};

                    

    response.send(respuesta);
};

module.exports = {getStart,getBookOne, postBook, putBook, deleteBook};
