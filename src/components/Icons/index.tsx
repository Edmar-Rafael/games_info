import React from 'react'
import { IconContainer } from './styles'
import { IconsProps } from '../../@Types/types';


function Icons({icon, ...props}: IconsProps) {

  return (
    <IconContainer
      className={
        props.back_home ? 'back_home' : '' || 
        props.modal_style ? 'modal_style' : '' ||
        props.switch_border ? 'switch_border' : '' ||
        props.class_name
      } 
      icon={icon} 
    />
  )
}

export default Icons