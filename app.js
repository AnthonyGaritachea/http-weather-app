const geoCode = require('./utils/geoCode.js');
const forecast = require('./utils/forecast.js');

require('dotenv').config();

if(!process.argv[2]){
    console.log('Please provide an address')
} else{
    geoCode(process.argv[2], (err, { latitude, longitude, location }) => {
        if(err){
            return console.log(err)
        }
    
        forecast(latitude, longitude, (err, forecastData) => {
            if(err){
                console.log(err)
            }
            console.log(location);
            console.log(forecastData)
        })
    });
};
