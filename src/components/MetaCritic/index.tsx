import React from 'react';
import Separator from '../Separator';
import { MetacriticContainer, MetacriticImg, MetacriticScore } from './styles';

type MetaCriticProps = {
  item: {
    metacritic?: number;
  }
}


function MetaCritic({item}: MetaCriticProps) {
  const hasMetacritc = item.metacritic !== null;
  
  if(hasMetacritc){
    return(
      <MetacriticContainer>
        <MetacriticImg />
        <Separator x={12}/>
        <MetacriticScore>{item.metacritic}</MetacriticScore>
      </MetacriticContainer>
    )
  }

  return null;
}

export default MetaCritic;