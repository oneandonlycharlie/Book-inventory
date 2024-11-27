const {Router} = require("express");
const indexRouter = Router();
const links = [
  { href: "/", text: "Home" },
  { href: "/books", text: "All Books"},
  { href: "/books/categories", text: "Category"},
  { href: "books/new", text: "Add Book"}
];

indexRouter.get("/", (req,res)=>{
    res.render("index", {message: "Home page to be built", recommendations: "award winning books",links: links})
})



module.exports = indexRouter