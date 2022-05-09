import React from 'react';
import {mapStoresIcons} from '../../utils/storeIcons'
import Separator from '../Separator';
import { LinkHolder, StoreIcon, StoreTitle } from './styles';


function LinkStore({storeId, url}) {
  return (
    <>
      <LinkHolder onClick={() => window.open(url, "_blank")} >       
        <StoreTitle>{storeId.name}</StoreTitle>
        <StoreIcon>
          {mapStoresIcons(storeId.slug, 'gameResume_storesIcons')}
        </StoreIcon>
      </LinkHolder>
      <Separator y={21}/>
    </>
  );
}

export default LinkStore;