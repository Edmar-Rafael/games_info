import React, {useEffect, useState} from 'react'
import {getPlatforms} from '../../services/platforms'
import SubDrop from '../SubDrop'
import { Options, Select, SelectArrow, TitleSelect } from './styles'


const Drop = ({ selectedPlatform, setSelectedPlatform }) => {
  const [show, toggleShow] = useState(false)  
  const [platforms, setPlatforms] = useState({})

  useEffect(()=> {
    async function fetchPlatforms() {
      const response = await getPlatforms()
      setPlatforms(response.data)
    }
    fetchPlatforms()
  }, [])
  

  return (
    <Select onMouseLeave={() => toggleShow(false)}>
      <TitleSelect onClick={() => toggleShow(!show)}>
        {selectedPlatform.name || 'Platforms'}
        <SelectArrow/>
      </TitleSelect>
      <Options show={show}>
      { platforms.results && platforms.results.map(platform => 
        <SubDrop
          key={platform.id}
          item={platform}
          setSelectedPlatform={setSelectedPlatform}
        ></SubDrop>
      )}
      </Options>            
    </Select>
  )
}

export default Drop