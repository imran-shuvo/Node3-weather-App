const express = require('express');
const path = require('path');
const publicDirectoryPath =  path.join(__dirname,'../public/');
const app = express();

app.use(express.static(publicDirectoryPath));


// console.log(__dirname)
// console.log(__filename)
// app.use()
app.get('',(req,res)=>{
    res.send('hello world');
})
app.get('/about',(req,res)=>{
    res.send('<title>this is about page</title>')
})
app.get('/weather',(req,res)=>{
    res.send({
        location:"washington",
        forecast:30

    })
})

app.listen(3000,()=>{
    console.log('sever is up now');
})