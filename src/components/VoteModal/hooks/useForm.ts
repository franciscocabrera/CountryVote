import { useState } from "react";

export const useForm = (
  countryVotes: {name: string, votes: number}[], 
  setVotes: (votes: {name: string, votes: number}[]) => void, 
  isValidEmail: (email: string) => boolean,
  closeModal: () => void
) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: ''
  });

  const [submitDisabled, setSubmitDisabled] = useState(true)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    const newFormData = {
      ...formData,
      [name]: value
    }
    setFormData(newFormData);
    
    setSubmitDisabled(
      newFormData.name === '' || 
      newFormData.country === '' || 
      !isValidEmail(newFormData.email)
    )
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const countryIndex = countryVotes.findIndex(country => country.name === formData.country)
    const newVotes = [...countryVotes]
    newVotes[countryIndex].votes++
    setVotes(newVotes)
    setFormData({
      name: '',
      email: '',
      country: ''
    })
    setSubmitDisabled(true)
    closeModal()
  };

  return { formData, submitDisabled, handleSubmit, handleInputChange }
}