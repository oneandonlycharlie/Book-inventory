const {Router} = require("express")
const fullListRouter = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "/books", text: "All Books"},
  { href: "/books/categories", text: "Category"}, 
  { href: "/new", text: "Add Book"}
];

fullListRouter.get("/", (req,res)=>{
    res.render("fullList", {message: "all books displayed here",links: links})
})

fullListRouter.get("/categories", (req,res)=>{
    console.log("logging categories")
    res.render("categories", {message: "this is all categories",links: links})
})

fullListRouter.get("/categories/:category", (req,res)=>{
    const category = req.params.category;
    console.log(category);
    res.render("category", {message: `This page is for category ${category}`,links: links})
})

fullListRouter.get("/:bookId", (req,res)=>{
    const bookId = req.params.bookId;
    console.log(bookId);
    res.render("item", {message: `This page is for a sample book with ID ${bookId}`,links: links})
})

module.exports = fullListRouter
