import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Separator } from '../../components'
import { FloatingLabel, SearchContainer, SearchInput } from './styles';
import Icons from '../Icons';


function Search(props) {

  return (
    <SearchContainer>
      <SearchInput placeholder={'Search'} {...props} />
      <FloatingLabel>Search</FloatingLabel>
      <Icons icon={faSearch} />
      <Separator y={26}/>
    </SearchContainer>
  );
}

export default Search;