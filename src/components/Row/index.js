import React from 'react'
import { RowContainer } from './styles'

function Row({children, ...props}) {

  return (
    <RowContainer 
      className={props.home_header_mobile ? 'home_header_mobile' : ''} 
      {...props}
    >
      {children}
    </RowContainer>
  )
}

export default Row