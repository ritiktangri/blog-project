const express=require('express')
const mongoose=require('mongoose')
const {ObjectId}=require("mongoose").Types

const blog=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    authorid:{
        type:ObjectId,
        required:true,
        ref:"blogmodel"
    }
})
module.exports=mongoose.model("blogmodel",blog)