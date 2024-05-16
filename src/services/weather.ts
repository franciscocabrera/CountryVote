import { WeatherData } from "./types/weatherData";

export async function getWeather(country: string) {
  try {
    const response = await fetch('https://wttr.in/'+country+'?format=j1')
    const data: WeatherData = await response.json()
    return { temp: data.current_condition[0].temp_C, description: data.current_condition[0].weatherDesc[0].value}
  } catch(error) {
    console.error(error)
    return {temp: 0, description: ''}
  }
}