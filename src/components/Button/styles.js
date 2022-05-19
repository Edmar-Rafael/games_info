import styled from  'styled-components'
import Colors from '../../resources/Colors'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.background};
  padding: 45px 80px;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  &.title_select{
    justify-content: space-between;
    width: 100%;
    padding: 1px 26px;
    font-family: 'Noto Sans';
    font-size: 15px;
    color: ${Colors.drop.select_font};
    background-color: ${Colors.drop.background};
    z-index: 9;
  }

  &.back_home{
    justify-content: unset;
    width: 40px;
    height: 40px;
    padding: 0;
    background-color: transparent;
  }
`