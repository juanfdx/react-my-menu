import './SearchInput.css';
import { useEffect, useState } from 'react';


type SearchInputProps = {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  placeholder?: string
}

export const SearchInput = ({ searchTerm, setSearchTerm, placeholder }: SearchInputProps) => {

  const [inputValue, setInputValue] = useState(searchTerm); // internal state

  useEffect(() => {
    const delay = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 300); // debounce delay in ms

    return () => clearTimeout(delay); // cleanup previous timeout
  }, [inputValue, setSearchTerm]);
  

  
  return (
    <input 
      className='search-input' 
      type="text" 
      name='search'
      value={inputValue}
      placeholder={placeholder ? `${placeholder}...` : 'Search...'}
      autoComplete='off'
      onChange={(e) => setInputValue(e.target.value)}
    />
  )
}