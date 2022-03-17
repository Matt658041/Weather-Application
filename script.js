// declare variables with document.query selector
var apiKey = 'bf17cff4e387d5594892608f7ffa180a';
var searchButton = document.querySelector('#search-btn');
var tempList = document.querySelector('#temperature');
var humidList = document.querySelector('#humidity');
var windList = document.querySelector('#wind');
var uvIndex = document.querySelector('#uv-index');

//get a value from input element by delcaring var and then if else statment
// and button click event handler

//format the api url and make url request
var getWeatherApi = function() {
    var requestUrl =' http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={apiKey}'

  fetch(requestUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('li');
      console.log(data[i].url);
      console.log(data[i].user.login);

      listItem.textContent = data[i].html_url;
      tempList.appendChild(listItem);
    }
  });

};

searchButton.addEventListener('click', getWeatherApi)