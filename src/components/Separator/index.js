import styled from 'styled-components'

const Separator = styled.div`
  width: ${({x}) => x || 5}px;
  height: ${({y}) => y || 5}px;
`

export default Separator