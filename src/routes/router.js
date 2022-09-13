const express=require('express')
const router=express.Router()

const authorCreate=require('../controller/author/authorController')
const blogmodel=require('../controller/blogcontroller/blog')
const authorlogin=require('../controller/author/login')
const updateAuthor=require("../controller/author/update")
const {verify}=require("jsonwebtoken")
const verifyUser=require('../middlewareJs/verify')
const quiry=require('../controller/blogcontroller/query')

router.post('/create',authorCreate)
router.post('/login',authorlogin)
router.post('/blog',blogmodel)
router.put('/update/:id',verifyUser,updateAuthor)
router.get('/query',quiry)
  
module.exports=router
