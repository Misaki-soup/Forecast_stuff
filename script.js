'use Strict'

//const url_weather = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weather_code,sunrise,sunset,temperature_2m_max,temperature_2m_min,precipitation_probability_max&hourly=temperature_2m,rain,showers,snowfall,cloud_cover,wind_direction_10m,wind_speed_10m&current=temperature_2m,is_day,rain,snowfall,cloud_cover,wind_speed_10m,wind_direction_10m,surface_pressure,apparent_temperature&timezone=auto&forecast_days=3`
//const url_cords = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`


async function GetWeather(){
    let city = 'Oslo'
    const url_cords = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`
    let cords = await fetch(url_cords)
    let country_data = await cords.json()
    console.log(country_data['results'][0]['latitude'])
    alert(country_data['results'][0]['longitude'])
}

GetWeather()