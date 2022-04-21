import React from 'react'
import { IconContainer } from './styles'

function Icons({icon, ...props}) {

  return (
    <IconContainer
      className={props.back_home ? 'back_home' : ''} 
      icon={icon} 
      {...props}
    />
  )
}

export default Icons