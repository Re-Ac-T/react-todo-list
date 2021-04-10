import React from 'react';
import styled from 'styled-components';
import { TxtBox } from 'components'

const StyledHeader = styled.div`
  text-align: left;
  font-family: IBM Plex Sans;
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.11999999731779099px;
    color: #B1ACBB;
  }
 

`;
export default ({ ...rest }) => {
  return (
    <StyledHeader {...rest}>
      <TxtBox><h2>포만젤리, 훈스</h2></TxtBox>
      <TxtBox><h1>Datepicker</h1></TxtBox>
      <TxtBox><h3>여러분의 스케줄을 적어주세요!</h3></TxtBox>
      <p>스케줄을 등록해주시면 캘린더에 ToDo 리스트가 나와요!!</p>
    </StyledHeader>
  )
}