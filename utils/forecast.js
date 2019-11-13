const request = require('request');
require('dotenv').config();

const forecast = (lat, lon, callback) => {
const darkSkyUrl = `https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/${lat},${lon}`;

request({url: darkSkyUrl, json: true}, (error, response) => {
    if(error){
        callback('weather service is down', undefined);
    }else if (response.body.error){
        callback('Unable to find location', undefined)
    }else {
        callback(undefined, `It is currently ${response.body.daily.data[0].summary} degrees out and ${response.body.currently.precipProbability}% chance of rain `)
    }
});
};

module.exports = forecast