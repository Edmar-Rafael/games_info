import styled from 'styled-components'

type SeaparatorProps = {
  x?: number;
  y?: number
}


const Separator = styled.div<SeaparatorProps>`
  width: ${({x}) => x || 5}px;
  height: ${({y}) => y || 5}px;
`

export default Separator