import React, { InputHTMLAttributes } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Separator } from '../../components'
import { FloatingLabel, SearchContainer, SearchInput } from './styles';
import { Icons } from '..';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  plc: string;
  text: string;
}


function Search({...props}: SearchProps) {

  return (
    <SearchContainer>
      <SearchInput placeholder={props.plc} {...props} />
      <FloatingLabel>{props.text}</FloatingLabel>
      <Icons icon={faSearch} />
      <Separator y={24}/>
    </SearchContainer>
  );
}

export default Search;