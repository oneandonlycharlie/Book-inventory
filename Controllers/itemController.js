const links = [
  { href: "/", text: "Home" },
  { href: "/books", text: "All Books"},
  { href: "/books/categories", text: "Category"}, 
  { href: "/books/new", text: "Add Book"}
];

const { body, validationResult } = require("express-validator");

const validateItem = [
    // add validation here
]

exports.itemListGet = (req,res)=>{
    console.log("fetch data from DB")
    res.render("fullList", {message: "all books displayed here",links: links})
}

exports.itemGet = (req,res)=>{
    const bookId = req.params.bookId;
    console.log("find data from DB according to book ID");
    res.render("item", {message: `This page is for a sample book with ID ${bookId}`,links: links}
)}


exports.itemCreateGet = (req,res)=>{
    console.log("show the create page")
    res.render("createItem", {links:links})
}

exports.itemCreatePost = [
    validateItem,
    // check errors 

    (req,res)=>{
        console.log("write date into DB")
        res.redirect("/books")
    }
]   


exports.categoryListGet = (req,res)=>{
    res.render("categories", {message: "this is all categories",links: links})
}

exports.categoryGet = (req,res)=>{
    const category = req.params.category;
    console.log(category);
    res.render("category", {message: `This page is for category ${category}`,links: links})
}