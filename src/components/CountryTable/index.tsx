import './styles.css'
import React from 'react'
import Table from './Table'
import { MOCK_COUNTRIES } from '../../mocks'
// import searchIcon from '../../assets/fi_search.svg'

const CountryTable: React.FC = () => {
  return (
    <div className="CountryTable">
      <b className="title">Top 10 Most Voted Countries</b>
      <div className='horizontal_container'>

          {/* <img className='search-image' src='searchIcon' alt="Search"/> */}
          <input 
            className='search'
            type='text' 
            placeholder='Search Country, Capital City, Region or Subregion'
          />

        <button className='button'>Vote</button>
      </div>
      <Table countryData={MOCK_COUNTRIES} />
    </div>
  )
}

export default CountryTable