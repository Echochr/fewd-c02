import "./SearchBar.css";
import { useState } from 'react'

function SearchBar(props) {
  const [ term, setTerm ] = useState('')

  const search = () => {
    props.onSearch(term)
  }

  const handleTermChange = evt => {
    setTerm(evt.target.value)
  }

  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
      <button className="SearchButton" onClick={search}>SEARCH</button>
    </div>
  )
}

export default SearchBar