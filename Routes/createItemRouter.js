const {Router} = require("express");
const createItemRouter = Router()

createItemRouter.get("/", (req,res)=>{
    res.render("createItem")
})

module.exports = createItemRouter;