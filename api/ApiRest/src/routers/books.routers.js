const{Router}=require("express")
const router = Router();
const booksCtrl=require("../controller/books.controller")


router.get("/",booksCtrl.getStart);
router.get("/books",booksCtrl.getBookOne)
router.post("/books",booksCtrl.postBook);
router.put("/books",booksCtrl.putBook);
router.delete("/books",booksCtrl.deleteBook);

module.exports=router;
