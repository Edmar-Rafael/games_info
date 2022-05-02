import styled from 'styled-components'
import metacritic from '../../images/metacritic.png'
import Colors from '../../resources/Colors'

export const MetacriticContainer = styled.div`
  display: flex;
  align-items: end;
`
export const MetacriticImg = styled.div`
  background: url(${metacritic});
  width: 32px;
  height: 32px;
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width: 800px) {
    width: 23px;
    height: 23px;
  }
`
export const MetacriticScore = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid ${Colors.metacritic};
  box-sizing: border-box;
  border-radius: 10px;
  font-family: 'Noto Sans';
  font-size: 22px;
  color: ${Colors.metacritic};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 800px) {
    width: 30px;
    height: 30px;
    font-size: 17px;
  }
`