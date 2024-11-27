const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path")
const indexRouter = require("./Routes/indexRouter")
const fullListRouter = require("./Routes/fullListRouter")
const createItemRouter = require("./Routes/createItemRouter")

app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");
app.set("Views",path.join(__dirname,"Views"));

app.use("/", indexRouter);
app.use("/books", fullListRouter);
app.use("/new",createItemRouter)



app.listen(PORT, ()=>{
    console.log(`PORT ${PORT} running`)
})

