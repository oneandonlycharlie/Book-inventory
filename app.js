const express = require("express");
const app = express();
const PORT = 3000;
const path = require("node:path")
const indexRouter = require("./Routes/indexRouter")
const itemRouter = require("./Routes/itemRouter")

app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");
app.set("Views",path.join(__dirname,"Views"));

app.use("/", indexRouter);
app.use("/books", itemRouter);



app.listen(PORT, ()=>{
    console.log(`PORT ${PORT} running`)
})

