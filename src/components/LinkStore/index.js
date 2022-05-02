import React from 'react';
import {mapIconStores} from '../../utils/storeIcons'
import Separator from '../Separator';
import { LinkHolder, StoreIcon, StoreTitle } from './styles';


function LinkStore({storeId, url}) {
  return (
    <>
      <LinkHolder onClick={() => window.open(url, "_blank")} >       
        <StoreTitle>{storeId.name}</StoreTitle>
        <StoreIcon>
          {mapIconStores(storeId.slug)}
        </StoreIcon>
      </LinkHolder>
      <Separator y={21}/>
    </>
  );
}

export default LinkStore;