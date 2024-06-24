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