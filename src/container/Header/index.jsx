import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  text-align: left;
  font-family: IBM Plex Sans;

  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    color: #9590A0;
  }

  h1 {
    font-size: 34px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: -0.5600000023841858px;
    color: #EEECF1;
  }
  
  p {
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
    color: #EEECF1;

    &.title_desc{
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.11999999731779099px;
      color: #B1ACBB;
    }
  }
 

`;
export default ({ ...props }) => {
  return (
    <StyledHeader {...props}>
      <h2>포만젤리, 훈스</h2>
      <h1>Datepicker</h1>
      <p>여러분의 스케줄을 적어주세요!</p>
      <p className="title_desc">스케줄을 등록해주시면 캘린더에 ToDo 리스트가 나와요!!</p>
    </StyledHeader>
  )
}