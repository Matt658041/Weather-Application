// declare variables with document.query selector


//get a value from input element by delcaring var and then if else statment
// and button click event handler

//format the api url and make url request
var getWeatherApi = function(user) {
    var apiUrl =' http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={bf17cff4e387d5594892608f7ffa180a}'
    fetch(apiUrl)
    if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
        displayWeather(data, user);
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    }
    .catch(function(error) {
      alert('Unable to connect to Weather Application');
    });

};

