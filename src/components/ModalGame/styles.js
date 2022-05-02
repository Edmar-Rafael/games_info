import styled from 'styled-components'
import Modal from 'react-modal';
import Colors from '../../resources/Colors';

export const CustomModal = styled(Modal)`
  right: auto;
  bottom: auto;
  transform: translate(50%, 20%);
  position: relative;
  width: 45%;
  border-radius: 20px;
  padding: 50px;

  @media(max-width: 800px) {
    width: 80%;
    padding: 20px;
    transform: translate(10%, 10%);
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${Colors.drop.background};  
`

export const Description = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-size: 16px;
  color: ${Colors.font};

  @media(max-width: 800px) {
    font-size: 14px;
  }
`