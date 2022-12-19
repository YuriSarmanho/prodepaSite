import React from 'react'
import TopHeaderButton from '../../../components/Buttons/TopHeaderButton'


function TopHeader() {
  return (
    <div className='TopHeaderContainer'>
      <div className="middleArea"></div>
      <TopHeaderButton children = {'Ouvidoria'}/>
    </div>
  )
}

export default TopHeader