import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding-top: ${({pad0}) => pad0 ? 0 : 19}px;
  padding-bottom: ${({padB}) => padB ? 0 : 19}px;

  &.home_header_mobile{
    @media(max-width: 500px) {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  @media(max-width: 800px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media(max-width: 500px) {
    flex-wrap: wrap;
  }
`