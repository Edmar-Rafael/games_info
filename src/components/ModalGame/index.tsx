import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { CustomModal, Description, Wrapper } from './styles';
import { Icons, Button } from '..';

type ModalGameProps = {
  description: string;
  showModal: boolean;
  setShowAbout: (value: boolean) => void
}


function ModalGame({description, showModal, setShowAbout}: ModalGameProps) {
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
        <Button onClick={() => setShowAbout(false)}>
          <Icons icon={faTimes} modal_style />
        </Button>
        <Description>{description}</Description>
      </Wrapper>
    </CustomModal>
  );
}

export default ModalGame;