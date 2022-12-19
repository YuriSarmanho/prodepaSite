import React from 'react'
import TopHeaderButton from '../../../components/Buttons/TopHeaderButton'


function TopHeader() {
  return (
    <div className='TopHeaderContainer'>
      <div className="leftArea"></div>
      <div className="middleArea"></div>
      <div className="rightArea"></div>
      <TopHeaderButton children = {'Ouvidoria'}/>
    </div>
  )
}

export default TopHeader