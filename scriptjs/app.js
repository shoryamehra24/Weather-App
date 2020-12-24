const form = document.querySelector("form")
const time = document.querySelector(".time")
const card = document.querySelector(".card")
const details = document.querySelector(".details")
const icon = document.querySelector(".icon img")





const updateDets = async (city) => {

   const cityDets  = await getCity(city)
   const weather = await getWeather(cityDets.Key)

   if(weather.IsDayTime){
    time.setAttribute("src", "img/day.svg")
}
else{
    time.setAttribute("src", "img/night.svg")
}

 


icon.setAttribute("src", `img/icons/${weather.WeatherIcon}.svg`)

   return {cityDets , weather}


}


const updateUI = (data) => {
console.log(data)
    // const cityDets = data.cityDets
    // const weather  = data.weather

    const{cityDets, weather} = data

    details.innerHTML =  `
    <h5 class="my-3">${cityDets.EnglishName}</h5>
         <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weather.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
         </div>`

        
         if(card.classList.contains("d-none")){
             card.classList.remove("d-none")
         }


}



form.addEventListener("submit", (e) => {

    e.preventDefault()

    const city = form.city.value.trim()
    form.reset()

    updateDets(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))

})