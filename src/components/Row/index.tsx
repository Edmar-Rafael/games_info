import React, { ReactNode } from 'react'
import { RowContainer } from './styles'

type RowProps = {
  padT?: boolean;
  padB?: boolean;
  home_header_mobile?: boolean;
  children: ReactNode
}


function Row(props: RowProps) {

  return (
    <RowContainer 
      className={props.home_header_mobile ? 'home_header_mobile' : ''} 
    >
      {props.children}
    </RowContainer>
  )
}

export default Row