import styled from 'styled-components'
import Colors from '../../resources/Colors'

export const LinkHolder = styled.div`
  background-color: ${Colors.date_box};
  border-radius: 10px;
  padding: 20px 10px;
  margin: 0px 45px 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 180px;
  cursor: pointer;
`

export const StoreTitle = styled.span`
  font-family: 'Noto Sans';
  font-size: 14px;
  color: ${Colors.drop.select_font};
  text-align: center;
`
export const StoreIcon = styled.div`
  width: 30px;
  height: 30px;
`