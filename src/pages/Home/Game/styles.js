import styled from "styled-components"
import Colors from "../../../resources/Colors"

export const Anchor = styled.a`
  text-decoration: none;
`

export const GameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  padding: 30px 150px;
  cursor: pointer;

  @media(max-width: 800px) {
    padding: 20px 45px;
  }

  @media(max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px 35px;
  }
`

export const ImgGame = styled.img`
  background: ${({ image }) => `url(${image})`};
  min-width: 33.5%;
  min-height: 210px;
  max-width: 33.5%;
  max-height: 210px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 10px solid ${Colors.game.border};

  @media(max-width: 800px) {
    min-width: 40%;
    max-width: 40%;
    min-height: 150px;
    max-height: 150px;
  }

  @media(max-width: 500px) {
    min-width: 60%;
    max-width: 60%;
    min-height: 100px;
    max-height: 100px;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 32px;
`

export const GameTitle = styled.span`
  font-family: 'Noto Sans';
  color: ${Colors.title};
  font-weight: bold;
  padding-bottom: 20px;
`

export const GamePlatforms = styled.span`
  font-size: 18px;
  font-family: 'Noto Sans';
  color: ${Colors.game.platforms};
  font-weight: 600;
  padding-bottom: 19px;
`

export const GameRelease = styled.span`
  font-size: ${({ size }) => size || 16}px;
  font-family: 'Noto Sans';
  color: ${Colors.game.platforms};
  font-weight: 600;
`

export const LineContainer = styled.div`
  background-color: ${({ isLast }) => isLast ? 'transparent' : `${Colors.game.line}`};
  width: 70%;
  margin: 0 auto;
  height: 0.5px;
`