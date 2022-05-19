import React from 'react';
import { Separator } from '../../../../components';
import { InnerOptions, Platform, PlatformFont, SelectArrow } from './styles';


function SubDrop({ item, setSelectedPlatform, parents, setParents }) {

  const hasPlatforms = item.platforms.length > 1

  function showParents() {
    setParents(item)
  }
  
  
  return (
    <>
      <Platform 
        onClick={() => hasPlatforms ? false : setSelectedPlatform(item.platforms[0])}
        hasPlatforms={hasPlatforms} 
        onMouseOver={() => hasPlatforms && showParents()}
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