


const fetchWeather = async () => {
    const apikey = "b92e57938eaebc6ded1fcf3a2f5b4bc3"
    const city = document.getElementById("cityName").value
    let cityNm = document.getElementById("cityNm")
    let citytemp = document.getElementById("citytemp")

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
    const data = await res.json()

    cityNm.innerText = data.name;
    citytemp.innerText = data.main.temp + "c"

    console.log(data)
}
// fetchWeather()