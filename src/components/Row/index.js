import React from 'react'
import { RowContainer } from './styles'

function Row({children, ...props}) {

  return (
    <RowContainer {...props}>
      {children}
    </RowContainer>
  )
}

export default Row