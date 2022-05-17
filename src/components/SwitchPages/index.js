import React from 'react';
import Icons from '../Icons'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Switch } from './styles';


function SwitchPages({reverse, ...props}) {

  return (
    <Switch {...props}>
      <Icons icon={reverse ? faChevronLeft : faChevronRight} switch_border='true' />
    </Switch>
  );
}

export default SwitchPages;