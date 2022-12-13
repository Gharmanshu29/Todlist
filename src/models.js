const mongoose = require("mongoose");
const todoSchema=new mongoose.Schema({
    title: String,
    description: String,
});

const mern=mongoose.model("mern",todoSchema);
module.exports={mern};


