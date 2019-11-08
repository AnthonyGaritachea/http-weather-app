const request = require('request');

require('dotenv').config();

const darkSkyUrl = `https://api.darksky.net/forecast/${process.env.DARK_SKY_API_KEY}/37.8267,-122.4233`;
// const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.MAP_BOX_API_KEY}&limit=1`;

// request({url: darkSkyUrl, json: true}, (error, response) => {
//     if(error){
//         console.log('weather service is down');
//     }else if (response.body.error){
//         console.log('Unable to find location')
//     }else {
//         console.log(`It is currently ${response.body.currently.temperature} degrees out and ${response.body.currently.precipProbability}% chance of rain `)
//     }
// });

// request({url: mapBoxUrl, json: true}, (error, response) => {
//     if (error){
//         console.log('geocode is down')
//     } else if(response.body.features == null){
//         console.log('unable to find location')
//     }else{
//         let latitude = response.body.features[0].center[1];
//         let longitude = response.body.features[0].center[0];
//         console.log(latitude, longitude);
//     }
// });

const geoCode = (address, callback) => {
    const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.MAP_BOX_API_KEY}&limit=1`;

    request({url: mapBoxUrl, json: true}, (error, response) => {
        if(error){
            callback('unable to connect to weather service', undefined)
        } else if (response.body.features.length == 0){
            callback('unable to find location try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0]['place_name']
            })
        }
    })
};

geoCode('California', (err, data) => {
    console.log('err', err);
    console.log('data', data)
});