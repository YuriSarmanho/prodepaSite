import React from 'react'
import TopHeaderButton from '../../../components/Buttons/TopHeaderButton'
import './index.css'

function TopHeader() {
  return (
    <div className='topHeaderContainer'>
      <div className="leftArea">
        <TopHeaderButton children = {'Transparencia'}/>
        <TopHeaderButton children = {'Ouvidoria'}/>
      </div>
      <div className="middleArea">middle</div>
      <div className="rightArea">rig</div>
      
    </div>
  )
}

export default TopHeader