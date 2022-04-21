import styled from "styled-components";
import Colors from "../../resources/Colors";

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
  background-color: ${Colors.box_z};
`

export const Title = styled.span`
  font-family: 'Noto Sans';
  font-size: 36px;
  color: ${Colors.font};
`

export const DateBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px 0;
  width: 13%;
  background: ${Colors.date_box};
  border-radius: 5px;
`

export const DateRelease = styled.span`
  font-family: 'Noto Sans';
  font-size: 16px;
  color: ${Colors.font};
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
  color: ${Colors.font};
`

export const AboutResume = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: ${Colors.font};
`

export const Resume = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: ${Colors.font};
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
  color: ${Colors.font};
  cursor: pointer;
  margin-bottom: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RedditIcon = styled.div`
  width: 20px;
  height: 20px;
  color: ${Colors.font};
  background-position: center;
  background-size: cover;
  cursor: pointer;
`

export const LinkReddit = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: ${Colors.font};
  cursor: pointer;
  margin-left: 8px;
`