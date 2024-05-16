import React, { useState, useEffect } from 'react';
import './styles.css'
import { Country, CountryTemperature } from '../../types/country'
import { getWeather } from '../../services/weather';

function useSortedCountries(countryData: Country[]) {
  const [sortedData, setSortedData] = useState<Country[]>([]);

  useEffect(() => {
    const sorted = countryData.sort((a, b) => b.votes - a.votes);
    setSortedData(sorted);
  }, [countryData]);
  return sortedData;
}

export const Table = ({ countryData, countryVotes }: { countryData: Country[], countryVotes: {name: string, votes: number}[]}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [weatherArray, setWeatherArray] = useState<CountryTemperature[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const itemsPerPage = 10;
  const sortedData = useSortedCountries(countryData);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = sortedData.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async (countries: Country[]) => {
      setIsLoading(true)
      try {
        const weatherDataPromise = await countries.map(async (country) => {
          const {temp, description} = await getWeather(country.name)
          return {name: country.name, temp, description}
        })
        const weatherData = await Promise.all(weatherDataPromise)
        setWeatherArray(weatherData)
      } catch(error) {
        console.error(error)
      }
      setIsLoading(false)
    }
    fetchData(sortedData)
  },[sortedData])

  return (
    <div>
      <table className='table'>
        <thead>
        <tr>
            <th>Country</th>
            <th>Capital City</th>
            <th>Region</th>
            <th>Sub Region</th>
            <th>Weather</th>
            <th className='votes-header'>Votes</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.capital_city}</td>
              <td>{item.region}</td>
              <td>{item.sub_region}</td>
              {isLoading ? 
              <td>Loading...</td> :
              <td>
                {
                  `${weatherArray.find(weather => weather.name === item.name)?.description ?? 'Loading...'} ` +
                  `${weatherArray.find(weather => weather.name === item.name)?.temp ?? ''}` +
                  '°C'
                }
              </td>}
              <td className='votes-column'>{countryVotes.find(vote => item.name === vote.name)?.votes}</td>

            </tr>
          ))}
        </tbody>
      </table>

      <div className='navigation-container'>
        <button className='page-button' disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev > 1 ? prev - 1 : 1)}>{'<'}</button>
        <span className='page-label'>Page {currentPage}</span>
        <button className='page-button' disabled={currentPage === 3} onClick={() => setCurrentPage(prev => prev < Math.ceil(sortedData.length / itemsPerPage) ? prev + 1 : prev)}>{'>'}</button>
      </div>
    </div>
  );
}