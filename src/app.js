const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const geocode = require('./utils/geocode')
const weather = require('./utils/weather')
const port = process.env.PORT ||3000




//configure path for express config
const publicDirectoryPath =  path.join(__dirname,'../public/');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');


//set up handlebars
app.set('view engine','hbs');
app.set('views',viewsPath);

//set up partials
hbs.registerPartials(partialsPath)

//set up static directory
app.use(express.static(publicDirectoryPath));




app.get('',(req,res)=>{
    res.render('index',{
        title:'this is home page',
        name:'imran  Hossain'

    })

});

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'this is about page',
        name:'imran hossain'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.search){
        return res.send('please search first')
    }
    location = req.query.search
    geocode(location,(error,{lattitude,longitude}={})=>{
        if(error){
            return res.send(error);
        }
        weather(lattitude,longitude,(error,{temperature})=>{
            if(error){
                return res.send(error);}
        
            res.send({temperature});
        })


    })
   
})


app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Send a help message',
        message:'I am get struck help me!',
        name:'imran'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        errorMessage:'Help article not found',
        name:'imran'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        errorMessage:'Page not found',
        name:'imran'
    })
})


//run the app
app.listen(port,()=>{
    console.log('sever is up now');
})