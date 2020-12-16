const express=require('express')
const app=express()

const PORT=process.env.PORT||5000

// routes
app.get('/',(req,res)=>{
    res.send('<h1>Hello World</h1>')
})
app.listen(PORT,()=>{
    console.log(`Server Running on port ${PORT}`);
})