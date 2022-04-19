import styled from 'styled-components'
import arrow from '../../images/arrow.png'

export const Select = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
color: #8E9093;
border-radius: 20px;
padding: 9px 26px;
background-color: #161618;
position: relative;
width: 175px; 
align-items:center;
`

export const Options = styled.div`
padding: 26px;
display: ${({show}) => show ? 'block' : 'none'};
position: absolute;
background-color: #161618;
width: 175px;
font-family: 'Noto Sans';
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
color:white;
z-index: 2;
top: 20px;
left: 0;
`
export const SelectArrow = styled.div`
background-image:url(${arrow});
width: ${({rotate}) => rotate ? 10 : 14}px;
height: ${({rotate}) => rotate ? 5 : 6}px;  
background-position: center;
background-size: cover;
z-index:99;
transform: ${({rotate}) => `rotate(${rotate ? '-90deg' : 0})`};
`
export const TitleSelect = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
font-family:'Noto Sans';
font-size:15px;
color:#8E9093;
z-index:99;
`