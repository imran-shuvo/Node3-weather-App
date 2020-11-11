const request = require('request');



const weather = (lattitude,longitude,callback)=>{
    // const url = 'http://api.openweathermap.org/data/2.5/weather?q='+address+'&appid=988c5b1c4f39da10af9db27c24fc48f2&&units=metric';
   
   const url = 'http://api.openweathermap.org/data/2.5/find?lat='+lattitude+'&lon='+longitude+'&cnt=1&appid=988c5b1c4f39da10af9db27c24fc48f2&&units=metric'
    request({url:url,json:true},(error,{body})=>{
        
        if(error)
        {
            callback('unable to connect',undefined);
        }
        else if(body.error)
        {
            callback('incorrect adrress,try again',undefined);
        }
        else
        {
            const data = body;
          
            callback(undefined,{
                temperature:data.list[0].main.temp,
                // humidity:data.main.humidity
            })
        }
        
        
        
    });
    
}

module.exports = weather;
