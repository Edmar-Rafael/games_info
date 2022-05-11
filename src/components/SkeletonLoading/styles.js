import styled from 'styled-components'
import Colors from '../../resources/Colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px auto;
  width: 70%;
  height: 250px;
  background-color: ${Colors.drop.background};
`

export const SkeletonImage = styled.div`
  width: 33%;
  height: 210px;
  background-color: ${Colors.background};
  margin-left: 20px;

  @media(max-width: 500px) {
    width: 80%;
    height: 100px;
  }
`

export const Column = styled.div`
  width: 50%;

  @media(max-width: 500px) {
    width: 80%;
  }
`;

export const SkeletonItem = styled.div`
  height: 30px;
  width: ${({width}) => width}%;
  background-color: ${Colors.background};
  margin: 20px;

  @media(max-width: 500px) {
    height: 10px;
  }
`