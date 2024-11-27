const {Router} = require("express")
const itemRouter = Router();
const itemController = require("../Controllers/itemController")

const links = [
  { href: "/", text: "Home" },
  { href: "/books", text: "All Books"},
  { href: "/books/categories", text: "Category"}, 
  { href: "/books/new", text: "Add Book"}
];

itemRouter.get("/", itemController.itemListGet)

itemRouter.get("/new", itemController.itemCreateGet)
itemRouter.post("/new", itemController.itemCreatePost)

itemRouter.get("/categories", itemController.categoryListGet)
itemRouter.get("/categories/:category", itemController.categoryGet)

itemRouter.get("/:bookId", itemController.itemGet)

// add delete function

module.exports = itemRouter
