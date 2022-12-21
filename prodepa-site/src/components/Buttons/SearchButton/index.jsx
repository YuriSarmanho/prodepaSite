import React from 'react'
import './index.css'

function SearchButton(props) {
  return (
    <button className='searchButton' type='submit'>{props.children}</button>
  )
}

export default SearchButton