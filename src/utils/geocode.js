const request = require('request');

const geocode = (address,callback)=>{
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?limit=1&access_token=pk.eyJ1IjoidGFuemluYTc4OTM0IiwiYSI6ImNraGFtcDRpajAxNXozNHRlcjY4cXdldG8ifQ.UZ4s2X1A1tvoF2n8CNKhXQ";
    
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('unable to connect network',undefined);
        }
        else if(body.features.length===0){
            callback('unable to find location',undefined);
        }
        else{
            var data =body.features[0];
            var lattitude,longitude;
            lattitude = data.center[1];
            longitude = data.center[0];
            data = {
                lattitude:lattitude,
                longitude:longitude
            }
            callback(undefined,data);
    
        }
      
       

})
}


module.exports = geocode;
