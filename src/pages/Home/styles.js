import styled from "styled-components"
import Colors from "../../resources/Colors"

export const BigBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  background-color: ${Colors.background};
  border-radius: 50px;

  @media(max-width: 800px) {
    width: 90%;
  }
`

export const Title = styled.div`
  font-family: 'Joystix';
  color: ${Colors.font};
  font-size: 32px;
  padding: 0 0 10px 0;

  @media(max-width: 800px) {
    font-size: 25px;
  }

  @media(max-width: 800px) {
    padding: 0 0 15px 0;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  border-bottom: .5px solid ${Colors.border_bottom};

  @media(max-width: 800px) {
    padding: 5px 20px;
  }
`

export const GameView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const SwitchBorder = styled.div`
  display:flex;
  justify-content:space-between;
  width: 80%;
  align-items: center;

  @media(max-width: 800px) {
    width: 90%;
  }
`