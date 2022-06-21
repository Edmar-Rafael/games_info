import React from 'react';
import { Separator } from '../../../../components';
import { PlatformsProps, ResultsProps } from '../../../../@Types/types';
import { InnerOptions, Platform, PlatformFont, SelectArrow } from './styles';

type SubDropProps = {
  setParents: (value: object) => void
  setSelectedPlatform: (value: PlatformsProps) => void;
  result: ResultsProps;
  parents: {
    id?: number;
  };
}


function SubDrop({ result, setSelectedPlatform, parents, setParents }: SubDropProps) {

  const hasPlatforms = result.platforms.length > 1

  function handleShowParents() {
    setParents(result)
  }
  
  
  return (
    <>
      <Platform 
        onClick={() => hasPlatforms ? false : setSelectedPlatform(result.platforms[0])}
        hasPlatforms={hasPlatforms} 
        onMouseOver={() => hasPlatforms && handleShowParents()}
      >         
        <PlatformFont onMouseLeave={() => setParents({})}>{result.name}</PlatformFont>
        { hasPlatforms && 
          <SelectArrow rotate/>
        } 
      </Platform>
      <Separator y={20}/>
      <InnerOptions showInner={result.id === parents.id}>
      { result.platforms && result.platforms.map(parent => 
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