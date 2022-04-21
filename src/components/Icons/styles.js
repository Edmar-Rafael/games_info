import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Colors from '../../resources/Colors'

export const IconContainer = styled(FontAwesomeIcon)`
  font-size: 15px;
  color: ${Colors.drop_select_font};
  position: absolute;
  transition: all .3s;
  transform: translate(15px, 18px);

  &.back_home{
    color: ${Colors.font};
    font-size: 45px;
    transform: translate(0, 0);
    cursor: pointer;
    position: unset;
  }
`