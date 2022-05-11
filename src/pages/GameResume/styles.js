import styled from "styled-components";
import Colors from "../../resources/Colors";

export const BoxResume = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85%;
  border-radius: 50px;
  background: ${({ image }) => `url(${image}) center no-repeat`};
  background-size: cover;
  overflow: hidden;

  @media(max-width: 800px) {
    width: 93%;
  }
`
export const BoxZ = styled.div`
  width: 90%;
  height: 90%;
  padding: 46px 54px;
  background-color: ${Colors.box_z};

  @media(max-width: 800px) {
    width: fit-content;
    height: fit-content;
    padding: 25px 25px;
  }

  @media(max-width: 500px) {
    padding: 25px 15px;
  }
`

export const Title = styled.span`
  font-family: 'Noto Sans';
  font-size: 36px;
  color: ${Colors.font};

  @media(max-width: 800px) {
    font-size: 23px;
  }
`

export const DateBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 4px 0;
  width: 13%;
  background: ${Colors.date_box};
  border-radius: 5px;

  @media(max-width: 800px) {
    width: 25%;
  }
`

export const DateRelease = styled.span`
  font-family: 'Noto Sans';
  font-size: 16px;
  color: ${Colors.font};
  font-weight: 300;

  @media(max-width: 800px) {
    font-size: 11px;
  }
`

export const PlatformsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const PlatformIcon = styled.div`
  padding-right: 20px;
`

export const AboutText = styled.span`
  font-family: 'Noto Sans';
  font-size: 18px;
  color: white;

  @media(max-width: 800px) {
    font-size: 15px;
  }
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

  @media(max-width: 800px) {
    font-size: 12px;
  }
`

export const AboutResume = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: ${Colors.font};

  @media(max-width: 800px) {
    font-size: 19px;
  }
`

export const Resume = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: ${Colors.font};

  @media(max-width: 800px) {
    font-size: 13px;
  }
`

export const ResumeBox = styled.div`
  width: 47.5%;
  max-height: 198px;
  overflow-y: hidden;
  cursor: pointer;

  @media(max-width: 800px) {
    width: 70%;
  }
`

export const StoreWraper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 47.5%;
  height: 280px;

  @media(max-width: 800px) {
    height: 210px;
  }

  @media(max-width: 500px) {
    width: 75%;
  }
`

export const RedditLinkOfficial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: flex-end;
`

export const LinkOfficial = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Noto Sans';
  font-size: 14px;
  color: ${Colors.font};
  cursor: pointer;

  @media(max-width: 800px) {
    font-size: 12px;
  }
`

export const RedditIcon = styled.img`
  width: 20px;
  height: 20px;
  color: ${Colors.font};
  background-position: center;
  background-size: cover;
  cursor: pointer;
`

export const LinkReddit = styled.span`
  font-family: 'Noto Sans';
  font-size: 14px;
  color: ${Colors.font};
  padding-left: 8px;
  cursor: pointer;

  @media(max-width: 800px) {
    font-size: 12px;
  }
`