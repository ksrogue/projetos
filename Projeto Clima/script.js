
// interação
const searchInput = document.getElementById('city-search-input');
const searchButton = document.getElementById('city-search-button');

// exibição
const currentDate = document.getElementById('current-date');
const currentCity = document.getElementById('current-city');
const weatherIcon = document.getElementById('weather-icon');
const temperatureDescription = document.getElementById('temperature-description');
const temperatureDegree = document.getElementById('temperature-degree');
const windSpeed = document.getElementById('wind-speed');
const feelsLikeTemperature = document.getElementById('feels-like-temperature');
const currentHumidity = document.getElementById('current-humidity');
const sunriseTime = document.getElementById('sunrise');
const sunsetTime = document.getElementById('sunset');

const api_key = "9e17bb10eef44eca0e16b52105564c45";

searchButton.addEventListener('click', () => {

    let cityName = searchInput.value;
    getCityWeather(cityName)
})

// quando o navegador carregar, irá pedir permissão para sabe a localização do usuário
navigator.geolocation.getCurrentPosition(
    (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        getCurrentLocationWeather(lat, lon)
    },
    (err) => {
        if (err.code === 1) {
            alert("Geolocalização negada pelo usuário, busque manualmente por uma cidade através da barra de pesquisa.")
        } else {
            console.log(err)
        }
    })

function getCurrentLocationWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${api_key}`)
        .then((response) => response.json())
        .then((data) => displayWeather(data))
}

function getCityWeather(cityName) {

    weatherIcon.src = `assets/loading-icon.svg`
    // fetch serve para buscar dados
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&lang=pt_br&appid=${api_key}`)
        .then((response) => response.json())
        .then((data) => displayWeather(data))
}

function displayWeather(data) {
    let {
        dt,
        name,
        weather: [{ icon, description }],
        main: { temp, feels_like, humidity },
        wind: { speed },
        sys: { sunrise, sunset },
    } = data

    /// Math.round() serve para arredondar um número quebrado

    currentDate.textContent = formatDate(dt);
    currentCity.textContent = name;
    weatherIcon.src = `assets/${icon}.svg`
    temperatureDescription.textContent = description;
    temperatureDegree.textContent = `${Math.round(temp)}ºC`;
    windSpeed.textContent = `${Math.round(speed * 3.6)}Km`;
    feelsLikeTemperature.textContent = `${Math.round(feels_like)}ºC`;
    currentHumidity.textContent = `${humidity}%`;
    sunriseTime.textContent = formatTime(sunrise);
    sunsetTime.textContent = formatTime(sunset);
}

function formatDate(epochTime) {
    let date = new Date(epochTime * 1000)
    let formattedDate = date.toLocaleDateString('pt-BR', { month: "long", day: 'numeric' })
    return `Hoje, ${formattedDate}`
}

function formatTime(epochTime) {
    let date = new Date(epochTime * 1000)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    return `${hours}:${minutes}`
}