const {request,response} =require("express");
const {mern}=require("./models");

//creating task

const task=async(request,response) => {
    console.log(request.body);

    await mern.create(request.body);
    return response.json({status:"Task has been created"});
};

//display

const display=async(request,response) => {
    var id = request.query.id;
    if( id){
        var tasks=await mern.findById(id);

    }
    else{
        var tasks=await mern.find();
    }
    return response.json(tasks);
};

//delete
const del =async(request,response) => {
    var id = request.query.id;
    var dl=request.body;
    console.log(id,dl);

    await mern.findByIdAndDelete(id,dl);
    return response.json({status:"Task has been deleted"});
};

//update
const upd =async(request,response) => {
    var id = request.query.id;
    var dl=request.body;
    console.log(id,dl);

    await mern.findByIdAndUpdate(id,dl);
    return response.json({status:"Task has been updated"});
};

//
module.exports={
    task,display,del,upd
};
