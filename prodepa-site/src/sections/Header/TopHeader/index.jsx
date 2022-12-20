import React from 'react'
import TopHeaderButton from '../../../components/Buttons/TopHeaderButton'
import LinksSection from '../../../components/LinksSection'
import './index.css'

function TopHeader() {
  return (
    <div className='topHeaderContainer'>
      <div className="leftArea">
        <TopHeaderButton children = {'Transparencia'}/>
        <TopHeaderButton children = {'Ouvidoria'}/>
      </div>
      <div className="middleArea">
        <LinksSection children={"Acessibilidade"}/>
        <LinksSection children={"Alto Contraste"}/>
        <LinksSection children={"Mapa do Site"}/>
      </div>
      <div className="rightArea">Right</div>
       
    </div>
  )
}

export default TopHeader