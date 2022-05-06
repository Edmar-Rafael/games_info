import styled from 'styled-components'
import Colors from '../../resources/Colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 30px auto;
  width: 70%;
  height: 250px;
  background-color: ${Colors.drop.background};
`

export const SkeletonImage = styled.div`
  width: 260px;
  height: 210px;
  background-color: ${Colors.background};
  margin-left: 20px;
`

export const Column = styled.div``;

export const SkeletonItem = styled.div`
  height: 30px;
  width: ${({width}) => width}px;
  background-color: ${Colors.background};
  margin: 20px;
`