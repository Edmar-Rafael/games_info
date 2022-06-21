import React from 'react';
import { StoresProps } from '../../@Types/types';
import {mapStoresIcons} from '../../utils/storeIcons'
import { LinkHolder, StoreIcon, StoreTitle } from './styles';

type LinkStoreProps = {
  storeId: StoresProps
}


function LinkStore({storeId}: LinkStoreProps) {
  return (
    <LinkHolder onClick={() => window.open(storeId.store.url, "_blank")} >       
      <StoreTitle>{storeId.store.name}</StoreTitle>
      <StoreIcon>
        {mapStoresIcons(storeId.store.slug, 'gameResume_storesIcons')}
      </StoreIcon>
    </LinkHolder>
  );
}

export default LinkStore;