import React from 'react'
import './index.css'
function TopHeaderButton(props) {
  return (
    <button className='topHeaderButton'>{props.children}</button>
  )
}

export default TopHeaderButton