import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  border-radius: 30px;
`

export const SearchInput = styled.input`
  background-color: ${Colors.search.background};
  font-family: 'Noto Sans';
  border: 2px solid ${Colors.search.border};
  border-radius: 30px;
  width: 99%;
  padding: 10px 30px;
  font-size: 20px;
  color: ${Colors.search.font};
  transition: all .3s;

  &:hover{
    border: 2px solid white;
  }

  &:focus, :hover {
    outline: none;
  }
  
  &:focus + label, :not(:placeholder-shown) + label {
    font-size: 16px;
    font-weight: 900;
    color: ${Colors.floating_label.focus_font};
    width: fit-content;
    height: fit-content;
    padding: 0 5px;
    transform: translate(10px, -60px) scale(.82) ;
  }
`

export const FloatingLabel = styled.label`
  display: flex;
  font-size: 18px;
  font-weight: 100;
  width: 70%;
  max-width: 99%;
  padding: 0 4px 2px 4px;
  margin-left: 11px;
  color: ${Colors.floating_label.font};
  font-family: 'Noto Sans';
  text-align: start;
  transform-origin: 0 0;
  transform: translate(22px, -39px);
  transition: all .3s;
  background-color: ${Colors.floating_label.background};
  z-index: 9;
  pointer-events: none;
`