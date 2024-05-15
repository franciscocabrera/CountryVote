import { ChangeEvent, useState } from 'react'
import { Country } from '../types/country'

export const useSearchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterData = (data: Country[]) => data.filter(item =>
    item.name.toLowerCase().startsWith(searchQuery.toLowerCase()) 
    || item.capital_city.toLowerCase().startsWith(searchQuery.toLowerCase())  
    || item.region.toLowerCase().startsWith(searchQuery.toLowerCase())
    || item.sub_region.toLowerCase().startsWith(searchQuery.toLowerCase()) 
  );

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return { searchQuery, filterData, handleSearchChange }
}