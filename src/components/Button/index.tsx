import React, { MouseEvent, ReactNode } from 'react';
import { ButtonContainer } from './styles';

type ButtonProps= {
  children: ReactNode;
  title_select?: boolean;
  back_home?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
}


function Button(props: ButtonProps) {

  return (
    <ButtonContainer 
      onClick={props.onClick && props.onClick}
      className={
        props.title_select ? 'title_select' : '' || 
        props.back_home ? 'back_home' : ''
      } 
    >
      {props.children}
    </ButtonContainer>
  );
}

export default Button;