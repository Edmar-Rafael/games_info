import styled from 'styled-components'
import Modal from 'react-modal';
import Colors from '../../resources/Colors';

export const CustomModal = styled(Modal)`
  width: 45%;
  padding: 30px;
  border-radius: 20px;
  transform: translate(50%, 20%);

  @media(max-width: 800px) {
    width: 80%;
    padding: 20px;
    transform: translate(10%, 10%);
  }

  @media(max-width: 500px) {
    transform: translate(8%, 10%);
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.span`
  font-family: 'Noto Sans';
  font-style: normal;
  font-size: 16px;
  color: ${Colors.font};
  background: ${Colors.drop.background}; 

  @media(max-width: 800px) {
    font-size: 14px;
  }
`