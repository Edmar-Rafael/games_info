import styled from "styled-components";

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding-top: ${({pad0}) => pad0 ? 0 : 19}px;
  padding-bottom: 19px;
`