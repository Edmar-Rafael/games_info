import styled from "styled-components"
import Colors from "../../../resources/Colors"

type Props = {
  image?: string;
  size?: number;
  isLast?: boolean;
}

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
    width: 92%;
    padding: 15px 15px;
  }

  @media(max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    width: 91%;
  }
`

export const PulsingBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-width: 38%;
  min-height: 221px;
  background-color: black;
  overflow: hidden;

  ::after{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: blue;

    animation: pulse 4s infinite;
  }

  ::before{
    content: '';
    width: 90%;
    height: 90%;
    background-color: black;
    z-index: 1;
    position: absolute
  }

  @keyframes pulse{
    0%{
      transform: scale(.9);
      opacity: .9;
    }
    100%{
      transform: scale(1.3);
      opacity: 0;
    }
  }

  @media(max-width: 500px) {
    min-width: 80%;
    min-height: 150px;
  }
`

export const ImgGame = styled.img<Props>`
  background: ${({ image }) => `url(${image})`};
  min-width: 94%;
  min-height: 206px;
  max-width: 94%;
  max-height: 206px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 9;

  @media(max-width: 500px) {
    min-width: 94%;
    max-width: 94%;
    min-height: 136px;
    max-height: 136px;
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

export const GameRelease = styled.span<Props>`
  font-size: ${({ size }) => size || 16}px;
  font-family: 'Noto Sans';
  color: ${Colors.game.platforms};
  font-weight: 600;
`

export const LineContainer = styled.div<Props>`
  background-color: ${({ isLast }) => isLast ? 'transparent' : `${Colors.game.line}`};
  width: 70%;
  margin: 0 auto;
  height: 0.5px;
`