import React, { useState } from 'react';
import Separator from '../Separator';
import { InnerOptions, Platform, PlatformFont, SelectArrow, SubDropContainer } from './styles';


function SubDrop({ item, setSelectedPlatform }) {
  const [parents, setParents] = useState([])

  const hasPlatforms = item.platforms.length > 1

  function showParents() {
    setParents(item)
  }
  
  
  return (
    <>
      <Platform 
        onClick={() => hasPlatforms ? false : setSelectedPlatform(item.platforms[0])}
        hasPlatforms={hasPlatforms} 
        onMouseOver={() => hasPlatforms ? showParents() : false}
        
      >         
        <PlatformFont onMouseLeave={() => setParents('')}>{item.name}</PlatformFont>
        { hasPlatforms && 
          <SelectArrow rotate='true'/>
        } 
      </Platform>
      <Separator y={20}/>
      <InnerOptions showInner={item.id === parents.id}>
      { item.platforms && item.platforms.map(parent => 
        <PlatformFont 
          onClick={() => setSelectedPlatform(parent)} 
          key={parent.id}
        >
          {parent.name}
        </PlatformFont>
      )}
      </InnerOptions>
  </>
  )
}

export default SubDrop;