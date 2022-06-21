import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const LinkHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  background-color: ${Colors.date_box};
  border-radius: 10px;
  padding: 15px 10px 15px 10px;
  cursor: pointer;

  @media(max-width: 800px) {
    padding: 12px 12px 12px 7px;
  }
`

export const StoreTitle = styled.span`
  font-family: 'Noto Sans';
  font-size: 14px;
  color: ${Colors.drop.select_font};
  text-align: center;

  @media(max-width: 800px) {
    font-size: 10px;
  }
`
export const StoreIcon = styled.div``