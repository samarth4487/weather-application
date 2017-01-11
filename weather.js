var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=582934f0e2a6be45ea54600ee74c3cbe&units=metric';

module.exports = function (callback) {
  request({
    url: url,
    json: true
  }, function (error, response, body) {
    if (error) {
      callback('Unable to fetch weather data!');
    } else {
      callback('It\'s ' + body.main.temp + '°C in ' + body.name + '!');
    }
  });
}
