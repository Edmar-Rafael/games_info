import styled from  'styled-components'
import Colors from '../../resources/Colors'

export const Switch = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: ${Colors.background};
width: 160px;
height: 90px;
border-radius: 20px;
cursor: pointer;

@media(max-width: 800px) {
  width: 120px;
  height: 70px;
}
`