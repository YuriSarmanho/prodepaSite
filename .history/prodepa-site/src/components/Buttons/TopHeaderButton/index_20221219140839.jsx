import React from 'react'

function TopHeaderButton(props) {
  return (
    <button className='topHeader'>{props.children}</button>
  )
}

export default TopHeaderButton