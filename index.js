const express=require("express");
const {task,display,upd,del}=require("./src/controller");
const cors=require("cors");
const server=express();
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://merng16:UbDGVRqSb7C9zxQG@cluster0.yprwra3.mongodb.net/Gharmanshu1870?retryWrites=true&w=majority");
mongoose.connection.on("connected",() => {
    console.log("Server has been started");
});

mongoose.connection.on("error",() => {
    console.log("Server not started");
});







server.use(cors());
server.use(express.json());

server.post("/creationoflist",task);
server.get("/Displaying",display);
server.put("/Updating",upd);
server.delete("/Deleting",del);



server.listen(4300, () => {
    console.log("terminal has started at port no. 4300");

});