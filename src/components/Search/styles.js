import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const SearchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  border-radius: 30px;
  padding: 5px 0 0 0;

  @media(max-width: 800px) {
    width: 50%;
  }

  @media(max-width: 500px) {
    width: 90%;
  }
`

export const SearchInput = styled.input`
  background-color: ${Colors.search.background};
  font-family: 'Noto Sans';
  border: 2px solid ${Colors.search.border};
  border-radius: 30px;
  width: 99%;
  padding: 10px 34px;
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
    transform: translate(23px, -60px) scale(.82) ;
  }

  @media(max-width: 800px) {
    font-size: 15px;
  }
`

export const FloatingLabel = styled.label`
  font-size: 18px;
  font-weight: 100;
  width: 70%;
  max-width: 99%;
  padding: 0 4px 0 4px;
  color: ${Colors.floating_label.font};
  background-color: ${Colors.floating_label.background};
  font-family: 'Noto Sans';
  text-align: start;
  transform-origin: 0 0;
  transform: translate(35px, -39px);
  transition: all .3s;
  z-index: 9;
  pointer-events: none;

  @media(max-width: 800px) {
    font-size: 14px;
    transform: translate(35px, -32px);
  }
`