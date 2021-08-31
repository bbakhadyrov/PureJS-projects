// const key = 'a1f78850680e4238bdf93421212808'
// const url = 'http://api.weatherapi.com/v1/forecast.json?key=' + key + '&q=' + region + '&days=7&aqi=no';




// constants 

const input = document.querySelector('.weather-app input');
const countryName = document.querySelector('.heading');
const currentDate = document.querySelector('.current-date');
const tempreture = document.querySelector('.main-weather__data');
const condition = document.querySelector('.condition')
const sunrise = document.querySelector('.sunrise span')
const sunset = document.querySelector('.sunset span');
const weatherApp = document.querySelector('.weather-app')


document.addEventListener('DOMContentLoaded', (e) => {
    fetchWeather('Tashkent')
})

document.addEventListener('keydown', (e) => {
    // if (input.value = '') return;
    if(e.key == 'Enter') {
        fetchWeather(input.value)
    }
})





async function fetchWeather(region) {
    try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a1f78850680e4238bdf93421212808&q=${region}&days=7&aqi=no`);
        const data = await response.json();
        modifiyingWeather(data);

    } catch(err) {
        alert('No Such Region')
    }
}

const currentRegion = {
    region: '',
    country: '',
    year: '',
    date: '',
    month: '',
    day: '',
    tempreture: '',
    condition: '',
    sunrise: '',
    sunset: '',
}



function modifiyingWeather(info) {
    console.log(info);
    currentRegion.region = info.location.name;
    currentRegion.country = info.location.country;
   // modifiying date
   let [year, month, date] = (info.location.localtime).split(' ')[0].split('-');
   currentRegion.year = year;
   let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   currentRegion.month = months[month.split('')[month.length - 1] - 1];
   currentRegion.date = date;
   let arr = ['Yesterday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   currentRegion.day = arr[new Date(year, month - 1, date).getDay()]
   
   currentRegion.condition = info.current.condition.text;
   currentRegion.tempreture = info.current.temp_c;
   currentRegion.sunrise = info.forecast.forecastday[0].astro.sunrise
   currentRegion.sunset = info.forecast.forecastday[0].astro.sunset

   isDayOrNight(info.current.is_day)
   modifiyingPage(currentRegion)
}

function modifiyingPage(obj) {
    countryName.innerText = `${obj.region}, ${obj.country}`
    currentDate.innerText = `${obj.day} ${obj.date} ${obj.month} ${obj.year}`
    tempreture.innerHTML = `${obj.tempreture}<span class="celcie__circle"></span>c`;
    condition.innerText = obj.condition;
    sunrise.innerText = obj.sunrise
    sunset.innerText = obj.sunset
}





function isDayOrNight(boolean) {
    if (boolean == 1) {
        weatherApp.style.background = 'url(images/day-bg.jpg) no-repeat center /cover'
        input.classList.remove('night')
    } else {
        input.classList.add('night')
        weatherApp.style.background = "url(images/night-bg.jpg) no-repeat center /cover"
    }
}



