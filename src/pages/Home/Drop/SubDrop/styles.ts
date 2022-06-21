import styled from 'styled-components'
import arrow from '../../../../images/arrow.png'
import Colors from '../../../../resources/Colors'

type StyledProps = {
  hasPlatforms?: boolean;
  rotate?: boolean;
  showInner?: boolean;
}

export const PlatformFont = styled.div`
  font-family: 'Noto Sans';
  font-size: 15px;
  color: ${Colors.drop.font};  
`

export const Platform = styled.div<StyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${({hasPlatforms}) => hasPlatforms ? 'initial' : 'pointer'};
`

export const SelectArrow = styled.div<StyledProps>`
  background-image: url(${arrow});
  width: ${({rotate}) => rotate ? 10 : 14}px;
  height: ${({rotate}) => rotate ? 5 : 6}px;  
  background-position: center;
  background-size: cover;
  z-index: 99;
  transform: ${({rotate}) => `rotate(${rotate ? '-90deg' : 0})`};
`

export const InnerOptions = styled.div<StyledProps>`
  padding: 26px;
  pointer-events: ${({showInner}) => showInner ? 'visible' : 'none'};
  opacity: ${({showInner}) => showInner ? 1 : 0};
  float: right;
  position: fixed;
  background-color: ${Colors.drop.background};
  border: 1px solid ${Colors.drop.border};
  box-shadow: ${Colors.drop.box_shadow};
  color: ${Colors.drop.font};
  width: 175px;
  font-family: 'Noto Sans';
  border-radius: 20px;
  z-index: 999;
  transform: translate(162px, -50px);
  transition: all .1s;
`