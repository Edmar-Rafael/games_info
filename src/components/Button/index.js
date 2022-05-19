import React from 'react';
import { ButtonContainer } from './styles';


function Button({children, ...props}) {

  return (
    <ButtonContainer 
      className={
        props.title_select ? 'title_select' : '' || 
        props.back_home ? 'back_home' : ''
      } 
      {...props} >
      {children}
    </ButtonContainer>
  );
}

export default Button;