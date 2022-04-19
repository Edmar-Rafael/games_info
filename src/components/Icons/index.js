import React from 'react'
import { IconContainer } from './styles'

function Icons({icon, ...props}) {

  return (
    <IconContainer icon={icon} {...props}/>
  )
}

export default Icons