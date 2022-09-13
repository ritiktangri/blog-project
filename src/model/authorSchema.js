const express=require('express')
const mongoose=require('mongoose')

const authorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        enum:['Mr','Mrs','Miss'],
        required:true

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Authormodel', authorSchema)

// console.log("Running")