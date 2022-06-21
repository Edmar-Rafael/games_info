import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Colors from '../../resources/Colors'

export const IconContainer = styled(FontAwesomeIcon)`
  font-size: 15px;
  color: ${Colors.font};
  position: absolute;
  transition: all .3s;
  transform: translate(15px, 18px);

  &.back_home{
    color: ${Colors.font};
    font-size: 45px;
    transform: translate(0, 0);
    cursor: pointer;

    @media(max-width: 800px) {
      font-size: 25px;
    }
  }

  &.modal_style{
    display: flex;
    align-self: flex-end;
    font-size: 15px;
    color: white;
    transform: translate(20px, -20px);
    cursor: pointer;

    @media(max-width: 800px) {
      transform: translate(13px, -10px);
    }
  }

  &.gameResume_storesIcons{
    font-size: 30px;
    position: initial;
    transform: translate(0, 0);

    @media(max-width: 800px) {
      font-size: 20px;
    }
  }

  &.gameResume_platforms{
    font-size: 40px;
    position: initial;
    transform: translate(0, 0);

    @media(max-width: 800px) {
      font-size: 30px;
    }
  }

  &.switch_border{
    color: white;
    width: 3.5rem;
    height: 3.5rem;
    transform: translate(0, 0);
  }
`