import styled from 'styled-components'
import arrow from '../../../images/arrow.png'
import Colors from '../../../resources/Colors'

export const Select = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 175px; 
  color: ${Colors.drop.select_font};
  border-radius: 20px;
  padding: 9px 26px;
  background-color: ${Colors.drop.background};
  position: relative;
  align-items: center;
  z-index: 19;
`

export const Options = styled.div`
  padding: 26px;
  pointer-events: ${({show}) => show ? 'visible' : 'none'};
  opacity: ${({show}) => show ? 1 : 0};
  position: absolute;
  background-color: ${Colors.drop.background};
  width: 175px;
  font-family: 'Noto Sans';
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: ${Colors.drop.font};
  z-index: 2;
  top: 20px;
  left: 0;
  transition: all .3s;
`

export const SelectArrow = styled.div`
  background-image: url(${arrow});
  width: ${({rotate}) => rotate ? 10 : 14}px;
  height: ${({rotate}) => rotate ? 5 : 6}px;  
  background-position: center;
  background-size: cover;
  z-index: 99;
  transition: all .3s;
  transform: ${({rotate, show}) => `rotate(${rotate ? '-90deg' : show ? '-180deg' : 0})`};
`

export const TitleSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: 'Noto Sans';
  font-size: 15px;
  color: ${Colors.drop.select_font};
  z-index: 99;
`