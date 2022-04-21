import styled from "styled-components"
import Colors from "../../resources/Colors"

export const BigBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  background-color: ${Colors.background};
  border-radius: 50px;
`

export const Title = styled.p`
  font-family: 'Joystix';
  color: ${Colors.font};
  font-size: 32px;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  border-bottom: .5px solid ${Colors.border_bottom};
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
`