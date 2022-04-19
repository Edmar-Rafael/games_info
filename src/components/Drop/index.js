import React, {useEffect, useState} from 'react'
import {getPlatforms} from '../../services/platforms'
import SubDrop from '../SubDrop'
import { Options, Select, SelectArrow, TitleSelect } from './styles'


const Drop = ({ selectedPlatform, setSelectedPlatform }) => {
  const [show, toggleShow] = useState(false)
  const [isShowing, toggleIsShowing] = useState(false)  
  const [platforms, setPlatforms] = useState({})

  useEffect(()=> {
    async function fetchPlatforms() {
      const response = await getPlatforms()
      setPlatforms(response.data)
    }
    fetchPlatforms()
  },[])
  

  return (
    <Select onMouseLeave={() => toggleShow(false)}>
      <TitleSelect onClick={() => toggleShow(!show)}>
        {selectedPlatform.name || 'Platforms'}
        <SelectArrow/>
      </TitleSelect>
      <Options show={show}>
      { platforms.results && platforms.results.map((platform, index) => (
        <SubDrop 
          key={index} 
          platform={platform}
          isShowing={isShowing}
          setSelectedPlatform={setSelectedPlatform}
          toggleIsShowing={toggleIsShowing} 
        />
      ))}
      </Options>            
    </Select>
  )
}

export default Drop