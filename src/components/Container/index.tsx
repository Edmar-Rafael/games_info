import React, { ReactNode } from 'react'
import { ContainerBox } from './styles'

type ContainerProps = {
  children: ReactNode
}


function Container({children}: ContainerProps) {

  return (
    <ContainerBox>
      {children}
    </ContainerBox>
  )
}

export default Container