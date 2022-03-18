// declare variables with document.query selector and span list
var weatherList = document.querySelector('#dashboard')
var fiveDay = document.querySelectorAll('.fiveday')
var apiKey = 'bf17cff4e387d5594892608f7ffa180a';
var searchButton = document.getElementById('search-btn');

 // Selectors for HTML elements to display weather information
 var cityEl = document.querySelector('#city');
 var dateEl = document.querySelector('#date');
 var weatherIconEl = document.querySelector('#weather-icon');
 var temperatureEl = document.querySelector('#temperature');
 var humidityEl = document.querySelector('#humidity');
 var windEl = document.querySelector('#wind');
 var uvIndexEl = document.querySelector('#uv-index');
 var cityListEl = document.querySelector('.cityList');

//prevent page from refreshing// get value from input elemtent// clear old content
 var formSubmitHandler = function(event) {
  // prevent page from refreshing
  event.preventDefault();

  // get value from input element
  var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);

    // clear old content
    repoContainerEl.textContent = '';
    nameInputEl.value = '';
  } else {
    alert('Please enter a GitHub username');
  }
};
var buttonClickHandler = function(event){
  var language = event.target.getAttribute("data-language");
  
  if (language) {
    getFeaturedRepos(language);
    //clear old content
    repoContainerEl.textContent = "";
  }
  };
//format the api url and make url request
var getWeatherApi = function() {
    var requestUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={bf17cff4e387d5594892608f7ffa180a} '

  fetch(requestUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    for (var i = 0; i < data.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = data[i].html_url;
      tempList.appendChild(listItem);
    }
  });
/* a way to dispay weather */
  var displayWeather = function (repos, searchTerm) {
    if (repos.length === 0) {
      repoContainerEl.textContent = 'No repositories found.';
      return;
    }
  
    repoSearchTerm.textContent = searchTerm;
  
    for (var i = 0; i < repos.length; i++) {
      var repoName = repos[i].owner.login + '/' + repos[i].name;
  
      var repoEl = document.createElement('a');
      repoEl.classList = 'list-item flex-row justify-space-between align-center';
      repoEl.setAttribute('href', './single-repo.html?repo=' + repoName);
  
      var titleEl = document.createElement('span');
      titleEl.textContent = repoName;
  
      repoEl.appendChild(titleEl);
  
      var statusEl = document.createElement('span');
      statusEl.classList = 'flex-row align-center';
  
      if (repos[i].open_issues_count > 0) {
        statusEl.innerHTML =
          "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
      } else {
        statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
      }
  
       /*  create a save to local storage  */
 var saveData = function() {
  localStorage.setItem("weather", JSON.stringify(data));
};

  saveData()
};
// and button click event handler
searchButton.addEventListener('click', getWeatherApi);
