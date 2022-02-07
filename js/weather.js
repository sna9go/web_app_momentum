
function onGeoOk(position) {
    //console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const location = document.getElementById("location");
        const temp = document.getElementById("temp");
        const weather = document.getElementById("weather-status");

        location.innerText = data.name;
        temp.innerText = `${data.main.temp}°C`;
        weather.innerText = data.weather[0].main;
    }); 
    // response -> 
    // {"coord":{"lon":126.7746,"lat":37.6046},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":-2.23,"feels_like":-2.23,"temp_min":-2.96,"temp_max":-0.94,"pressure":1028,"humidity":68},"visibility":10000,"wind":{"speed":1.03,"deg":40},"clouds":{"all":0},"dt":1644244502,"sys":{"type":1,"id":8105,"country":"KR","sunrise":1644186701,"sunset":1644224543},"timezone":32400,"id":1842936,"name":"Gimpo-si","cod":200}
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

