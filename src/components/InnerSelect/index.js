import React from 'react';
import { InnerOptions, PlatformFont } from './styles';


function InnerSelect({showInner, onMouseOut, platforms, setSelectedPlatform}) {
  
  return (
    <InnerOptions show={showInner} onMouseLeave={onMouseOut}>
    { platforms.map((platform, index) => 
      <PlatformFont 
        onClick={() => setSelectedPlatform(platform)} 
        key={index} 
        value={index}
      >
        {platform.name}
      </PlatformFont>
    )}
    </InnerOptions>
  )
}

export default InnerSelect;