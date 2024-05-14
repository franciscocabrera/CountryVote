import React, { useState, useEffect } from 'react';
import './styles.css'

type Country = {
  name: string,
  official_name: string,
  capital_city: string,
  region: string,
  sub_region: string,
  votes: number
}

function useSortedCountries(countryData: Country[]) {
  const [sortedData, setSortedData] = useState<Country[]>([]);

  useEffect(() => {
    const sorted = countryData.sort((a, b) => b.votes - a.votes);
    setSortedData(sorted);
  }, [countryData]);

  return sortedData;
}

function Table({ countryData }: { countryData: Country[]}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const sortedData = useSortedCountries(countryData);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = sortedData.slice(startIndex, endIndex);

  return (
    <div className='table'>
      <table>
        <thead>
        <tr>
            <th>Country</th>
            <th>Capital City</th>
            <th>Region</th>
            <th>Sub Region</th>
            <th>Weather</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.capital_city}</td>
              <td>{item.region}</td>
              <td>{item.sub_region}</td>
              <td>weather</td>
              <td>{item.votes}</td>

            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={() => setCurrentPage(prev => prev > 1 ? prev - 1 : 1)}>Previous</button>
        <span>Page {currentPage}</span>
        <button onClick={() => setCurrentPage(prev => prev < Math.ceil(sortedData.length / itemsPerPage) ? prev + 1 : prev)}>Next</button>
      </div>
    </div>
  );
}

export default Table;