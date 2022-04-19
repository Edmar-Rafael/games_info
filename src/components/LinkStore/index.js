import React from 'react';
import {mapIconStores} from '../../utils/storeIcons'
import { LinkHolder, StoreIcon, StoreTitle } from './styles';


function LinkStore({store, url}) {
  return (
    <LinkHolder onClick={()=> window.open(url, "_blank")} >       
      <StoreTitle>{store.name}</StoreTitle>
      <StoreIcon>
        {mapIconStores(store.slug)}
      </StoreIcon>
    </LinkHolder>
  );
}

export default LinkStore;