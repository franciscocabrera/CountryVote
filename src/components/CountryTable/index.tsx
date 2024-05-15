import './styles.css'
import React from 'react'
import Table from './Table'
import { MOCK_COUNTRIES } from '../../mocks'
import searchIcon from '../../assets/search.svg'
import { useSearchbar } from '../useSearchbar'

const CountryTable: React.FC = () => {
  const { searchQuery, filterData, handleSearchChange } = useSearchbar()

  return (
    <div className="CountryTable">
      <b className="title">Top 10 Most Voted Countries</b>
      <div className='horizontal_container'>
        <div className='searchbar'>
          <img src={searchIcon} className="search-icon" alt="search-icon" />
          <input 
            className='search-input'
            type='text' 
            placeholder='Search Country, Capital City, Region or Subregion'
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <button className='button'>Vote</button>
      </div>
      <Table countryData={filterData(MOCK_COUNTRIES)} />
    </div>
  )
}

export default CountryTable