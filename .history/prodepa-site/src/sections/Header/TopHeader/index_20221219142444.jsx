import React from 'react'
import TopHeaderButton from '../../../components/Buttons/TopHeaderButton'


function TopHeader() {
  return (
    <div className='TopHeaderContainer'>
      <div className="leftArea">
        <TopHeaderButton children = {'Ouvidoria'}/>
        <TopHeaderButton children = {'Ouvidoria'}/>
      </div>
      <div className="middleArea"></div>
      <div className="rightArea"></div>
      
    </div>
  )
}

export default TopHeader