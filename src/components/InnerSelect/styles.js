import styled from 'styled-components';
import Colors from '../../resources/Colors';

export const PlatformFont = styled.div`
  font-family: 'Noto Sans';
  font-size: 15px;
  color: ${Colors.drop.font};
  padding: 10px 0;
  cursor: pointer;
`
export const InnerOptions = styled.div`
  padding: 26px;
  display: ${({show}) => show ? 'block' : 'none'};
  position: relative;
  float: right;
  background-color: ${Colors.drop.background};
  width: 175px;
  font-family: 'Noto Sans';
  border-radius: 20px;
  color: ${Colors.drop.font};
  left: 200px;
  top: -50px;
  z-index: 999;
  border: 1px solid ${Colors.drop.border};
  box-shadow: ${Colors.drop.box_shadow};
`