import React from 'react'
import Modal from 'react-modal'
import './styles.css'
import { useValidateEmail } from './hooks/useValidateEmail'
import { Props, modalStyle } from './modalProps'
import { useForm } from './hooks/useForm'
import { MOCK_COUNTRIES } from '../../mocks'

const VoteModal: React.FC<Props> = (
  {
    isModalOpen, 
    closeModal, 
    setVotes, 
    countryVotes
  }) => {
  const { isValidEmail } = useValidateEmail()
  const { 
    formData, 
    submitDisabled, 
    handleSubmit, 
    handleInputChange 
  } = useForm(countryVotes, setVotes, isValidEmail, closeModal)
  const sortedCountries = MOCK_COUNTRIES.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1; 
    }
    return 0;
  });

  return  (
    <Modal isOpen={isModalOpen} style={modalStyle} >
      <b className='modal-header'>
        Vote Country
      </b>
      <form className='form' onSubmit={handleSubmit}>
        <label className='modal-section'>
          Name
          <input
            name='name' 
            className='modal-input' 
            placeholder='Name' 
            onChange={handleInputChange} 
            value={formData.name}
          />
        </label>
        <label className='modal-section'>
          Email
          <input
            name='email' 
            className={
              formData.email && !isValidEmail(formData.email) ? 
              'invalid-input' : 
              'modal-input'
            } 
            placeholder='Email' 
            onChange={handleInputChange} 
            value={formData.email}
            />
          {
            formData.email && !isValidEmail(formData.email) && 
            <span className='invalid-email'>
              Invalid Email
            </span>
          }
        </label>
        <label className='modal-section'>
        Favourite country
        <select
          name="country"
          value={formData.country}
          onChange={handleInputChange}
          className='modal-input'
        >
          <option value="">Favourite Country</option>
          {sortedCountries.map(country => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </label>
        <div className='button-container'>
          <button onClick={closeModal} className='cancel-button'>
            Cancel
          </button>
          <button className='vote-button' type='submit' disabled={submitDisabled}>
            Vote
          </button>
        </div>
      </form>
    </Modal>
  )
} 

export default VoteModal