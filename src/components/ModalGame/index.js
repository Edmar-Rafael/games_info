import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { CustomModal, Description, Icon, Wrapper } from './styles';


function ModalGame({description, showModal, setShowAbout}) {
  return (
    <CustomModal 
      closeTimeoutMS={2000}
      isOpen={showModal} 
      onRequestClose={() => setShowAbout(false)}
      style={{
        overlay: {
          background: '#00000077',
          backdropFilter: 'blur(2px)'
        }
      }}     
    >
      <Wrapper>
        <Icon icon={faTimes} onClick={() => setShowAbout(false)} />
        <Description>{description}</Description>    
      </Wrapper>
    </CustomModal>
  );
}

export default ModalGame;