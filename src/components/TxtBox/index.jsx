import React from 'react';
import styled, { css } from 'styled-components';

const StyledAddTodo = styled.div`
  text-align: left;
  font-family: IBM Plex Sans;
  > * {
    margin: 0;
  }
  h1 {
    font-size: 34px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: -0.5600000023841858px;
    color: #EEECF1;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    color: #9590A0;
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
    color: #EEECF1;
  }
  h4 {

    font-size: 16px;
    line-height: 24px;
    color: #B1ACBB;
  }
`;

export const TxtBox = ({ children }) => {
  return (
    <StyledAddTodo>
      {children}
    </StyledAddTodo>);
}