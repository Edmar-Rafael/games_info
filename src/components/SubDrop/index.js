import React from 'react';
import InnerSelect from '../InnerSelect';
import { Platform, PlatformFont, SelectArrow } from './styles';


function SubDrop({ platform, isShowing, toggleIsShowing, setSelectedPlatform }) {
  
  const hasPlatforms = platform.platforms.length > 1

  function onMouseOver() {
      toggleIsShowing(platform)
  }

  
  return (
    <>
      <Platform 
        hasPlatforms={hasPlatforms} 
        onClick={() => hasPlatforms ? false : setSelectedPlatform(platform.platforms[0])}
        onMouseOver={() => hasPlatforms ? onMouseOver() : false}
      >         
        <PlatformFont value={platform.id}>{platform.name}</PlatformFont>
        { hasPlatforms && 
          <SelectArrow rotate='true'/> 
        }                                
      </Platform>
      <InnerSelect
        setSelectedPlatform={setSelectedPlatform}
        showInner={platform.id === isShowing.id} 
        onMouseOut={()=> toggleIsShowing(false)}
        platforms={platform.platforms}
      />
    </>
  )
}

export default SubDrop;