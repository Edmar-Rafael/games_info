import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { CustomModal, Description, Wrapper } from './styles';
import Icons from '../Icons';


function ModalGame({description, showModal, setShowAbout}) {
  return (
    <CustomModal 
      closeTimeoutMS={2000}
      isOpen={showModal} 
      onRequestClose={() => setShowAbout(false)}
      style={{
        overlay: {
          background: '#000000aa',
          backdropFilter: 'blur(2px)'
        }
      }}     
    >
      <Wrapper>
        <Icons 
          onClick={() => setShowAbout(false)} 
          icon={faTimes} 
          modal_style='true'
        />
        <Description>{description}</Description>    
      </Wrapper>
    </CustomModal>
  );
}

export default ModalGame;