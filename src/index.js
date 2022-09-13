const express=require('express')
const app=express()
const mongoose=require('mongoose')
app.use(express.json())
const route=require('./routes/router')


mongoose.connect("mongodb+srv://chiomii:1234567890@cluster0.gwos2lx.mongodb.net/test",{
    useNewUrlParser: true,

}).then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/',route)

app.listen(1001,()=>{
    console.log("App is running",1001)
})
