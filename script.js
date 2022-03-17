// declare variables with document.query selector and span list
var weather ={};

var apiKey = 'bf17cff4e387d5594892608f7ffa180a';
var searchButton = document.querySelector('#search-btn');

 // Selectors for HTML elements to display weather information
 var cityEl = $('h2#city');
 var dateEl = $('h3#date');
 var weatherIconEl = $('img#weather-icon');
 var temperatureEl = $('span#temperature');
 var humidityEl = $('span#humidity');
 var windEl = $('span#wind');
 var uvIndexEl = $('span#uv-index');
 var cityListEl = $('div.cityList');



  // append span and p element to parent li
  taskLi.append(taskSpan, taskP);


  // append to ul list on the page
  $("#list-" + taskList).append(taskLi);




//get a value from input element by delcaring var and then if else statment


//format the api url and make url request
var getWeatherApi = function() {
    var requestUrl =' http://api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={apiKey}'

  fetch(requestUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('span');
      console.log(data[i].url);
      console.log(data[i].user.login);

      listItem.textContent = data[i].html_url;
      tempList.appendChild(listItem);
    }
  });
 /*  create a save to local storage  */
 var saveData = function() {
  localStorage.setItem("weather", JSON.stringify(tasks));
};

  saveData()
};
// and button click event handler
searchButton.addEventListener('click', getWeatherApi)