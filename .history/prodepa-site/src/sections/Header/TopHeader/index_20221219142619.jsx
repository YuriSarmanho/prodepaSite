import React from 'react'
import TopHeaderButton from '../../../components/Buttons/TopHeaderButton'
import 

function TopHeader() {
  return (
    <div className='TopHeaderContainer'>
      <div className="leftArea">
        <TopHeaderButton children = {'Transparencia'}/>
        <TopHeaderButton children = {'Ouvidoria'}/>
      </div>
      <div className="middleArea"></div>
      <div className="rightArea"></div>
      
    </div>
  )
}

export default TopHeader