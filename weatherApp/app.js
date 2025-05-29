const apikey = "9b4017f3fc1a92e14cebc2aea38f97b3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


// DOM elements
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weatherIcon');
const card = document.querySelector('.card');


// Check weather by city name
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    let data = await response.json();
    updateWeather(data);
    console.log(data);
}

// Check weather by coords (default)
async function checkWeatherByCoords(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apikey}`);
    const data = await response.json();
    updateWeather(data);

    console.log(data);
}

// Update weather info
function updateWeather(data) {
    if (data.cod != 200) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {

        document.querySelector('.city').innerHTML = `${data.name + ', '} ${data.sys.country}`;
        document.querySelector('.temp').innerHTML = Math.ceil(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
            card.style.background = 'linear-gradient(135deg, #003973, #e5e5be)';
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
            card.style.background = 'linear-gradient(135deg, #ff512f, #f09819)';
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
            card.style.background = 'linear-gradient(135deg, #232526, #414345)';
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
            card.style.background = 'linear-gradient(135deg, #5f2c82,rgb(20, 20, 20))';
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
            card.style.background = 'linear-gradient(135deg, #1a2980,#26d0ce)';
        }

        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
    }
}

// Auto-fetch location on page load
window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                checkWeatherByCoords(lat, lon);
            },
            (error) => {
                console.warn('Geolocation failed, defaulting to Mumbai');
                checkWeather('Mumbai'); // fallback
            }
        );
    } else {
        updateWeather('Mumbai');
    }
});


searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});

