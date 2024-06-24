function getWeather() {
    const apiKey = `7b2321a733bb18916e05fdcee6f22156`
    const city = document.getElementById('city').value

    if (!city) {
        alert('Please enter a city')
        return;
    }
}

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; // This will throw an error because city and apiKey are not defined in this scope
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`; // This will throw an error because city and apiKey are not defined in this scope

function getWeather() {

    fetch(currentWeatherUrl)
        .then((response) => response.json())
        .then((data) => {
            displayWeather(data);
        })
        .catch((error) => {
            console.error('Error fetching current current weather data:', error);
            alert('An error occurred while fetching current weather data. Please try again.');
        });
}

function getWeather() {
    fetch(forecastUrl)
    .then((response) => response.json())
    .then(data => {
        displayHourlyForecast(data.list);
    })
    .catch((error) => {
        console.error('Error fetching hourly forecast data:', error);
        alert('An error occurred while fetching forecast data. Please try again.');
    });
}
function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const hourlyForecastDiv = document.getElementById('hourly-forecast');

    // Clear previous weather data
    weatherInfoDiv.innerHTML = '';
    hourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';
}

function displayWeather(data) {

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {

        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}@4x.png`;
    }
}