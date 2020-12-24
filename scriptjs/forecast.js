
const key = "WTxH9QAj22qVuTiG39sLvjTZQ6Z4vuAh"

//getting the weather API//

const getWeather = async (id) => {

    const base = "http://dataservice.accuweather.com/currentconditions/v1/"
    const params = `${id}?apikey=${key}`

    const response = await fetch(base + params)

    const data = await response.json()

    return data[0]
    


}



// getting the city API//

const getCity = async (city) => {

    const base = "http://dataservice.accuweather.com/locations/v1/cities/search"
    const params = `?apikey=${key}&q=${city}` 

    const response = await fetch(base + params)

    const data = await response.json()

    return data[0]
}



getCity("manchester")
.then(data => getWeather(data.Key))
  .then(data => console.log(data))
  .catch(err => console.log(err))




