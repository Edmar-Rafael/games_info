import styled from "styled-components";

export const BoxResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  height: 900px;
  border-radius: 50px;
  background: ${({ image }) => `url(${image}) center no-repeat`};
  background-size: cover;
  overflow: hidden;
`
export const BoxZ = styled.div`
  width: 90%;
  height: 90%;
  padding: 46px 54px;
  background-color: #000000dd;
`

export const Title = styled.span`
  font-family: 'Noto Sans';
  font-size: 36px;
  color: white;
`

export const DateBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px 0;
  width: 13%;
  background: #333333;
  border-radius: 5px;
`

export const DateRelease = styled.span`
  font-family: 'Noto Sans';
  font-size: 16px;
  color: white;
  font-weight: 300;
  `

export const PlatformsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const PlatformIcon = styled.div`
  display: flex;
  justify-content: center;
  padding-right: 20px;
`

export const AboutText = styled.span`
  font-family: 'Noto Sans';
  font-size: 18px;
  color: white;
`

export const GamePublishers= styled.div`
  padding-right: 5px;
`

export const Playtime = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
`

export const AboutResume = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #FFFFFF;
`

export const Resume = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #FFFFFF;
`

export const ResumeBox = styled.div`
  display: block;
  width: 47.5%;
  max-height: 198px;
  overflow-y: hidden;
  cursor: pointer;
`

export const StoreWraper = styled.div`
  width: 47.5%;
  height: 280px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const RedditLinkOfficial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
`

export const LinkOfficial = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: white;
  cursor: pointer;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RedditIcon = styled.div`
  width: 20px;
  height: 20px;
  color: white;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`

export const LinkReddit = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: white;
  cursor: pointer;
  margin-left: 8px;
`