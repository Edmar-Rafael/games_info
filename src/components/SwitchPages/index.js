import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Switch } from './styles';


function SwitchPages({reverse, onClick}) {

  return (
    <Switch onClick={onClick}>
      <FontAwesomeIcon icon={reverse ? faChevronLeft : faChevronRight} size={'3x'} color={'white'} />
    </Switch>
  );
}

export default SwitchPages;