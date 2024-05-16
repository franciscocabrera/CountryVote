import './styles.css'
import React, { useEffect, useState } from 'react'
import { MOCK_COUNTRIES } from '../../mocks'
import searchIcon from '../../assets/search.svg'
import { useSearchbar } from '../../utils/hooks/useSearchbar'
import VoteModal from '../VoteModal'
import { Country } from '../../types/country'
import { Table } from '../Table'
import { SuccessAlert } from '../SuccessAlert'

const CountryTable: React.FC = () => {
  const { searchQuery, filterData, handleSearchChange } = useSearchbar()
  const [ isModalOpen, setIsModalOpen ] = useState(false)
  const [ isAlertVisible, setAletVisible ] = useState(false)
  const [ countryVotes, setVotes ] = useState(MOCK_COUNTRIES.map(({name, votes}: Country) => {
    return {name, votes}
  }))

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const showAlert = () => setAletVisible(true)
  const closeAlert = () => setAletVisible(false)

  useEffect(() => {
    if (isAlertVisible) {
      const timeoutId = setTimeout(() => {
        closeAlert()
      }, 2000);
      return () => clearTimeout(timeoutId);
    }
  },[isAlertVisible])


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
        <button className='button' onClick={openModal}>Vote</button>
      </div>
      <Table countryData={filterData(MOCK_COUNTRIES)} countryVotes={countryVotes} />
      <VoteModal 
        isModalOpen={isModalOpen} 
        closeModal={closeModal} 
        setVotes={setVotes} 
        countryVotes={countryVotes}
        showAlert={showAlert}/>
      {isAlertVisible && <SuccessAlert closeAlert={closeAlert}/>}
    </div>
  )
}

export default CountryTable