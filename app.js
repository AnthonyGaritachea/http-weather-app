const geoCode = require('./utils/geoCode.js');
const forecast = require('./utils/forecast.js');

require('dotenv').config();

forecast(-75.7088, 44.1545, (err, data) => {
    console.log('err', err);
    console.log('data', data)
})

geoCode('New York', (err, data) => {
    console.log('err', err);
    console.log('data', data)
});

