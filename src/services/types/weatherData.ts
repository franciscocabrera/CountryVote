export type WeatherData = {
	current_condition: 
		{
		    FeelsLikeC: number,
		    FeelsLikeF: number,
		    cloudcover: number,
		    humidity: number,
		    observation_time: Date,
		    precipMM: number,
		    pressure: number,
		    temp_C: number,
		    temp_F: number,
		    uvIndex: number,
		    visibility: number,
		    weatherCode: number,
		    weatherDesc: {
			    value: string
			  }[],
		    weatherIconUrl: {
			    value: string
        }[],
		    winddir16Point: string,
		    winddirDegree: number,
		    windspeedKmph: number,
		    windspeedMiles: number
		}[]
}
