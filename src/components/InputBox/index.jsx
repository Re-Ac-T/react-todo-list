import React from 'react';
import styled from 'styled-components';

const StyledInputBox = styled.div`
font-family: IBM Plex Sans;
  label {
    font-size: 16px;
    line-height: 24px;
    color: #B1ACBB;
  }
  input {
    padding: 15px;
    width: 100%;
    height: 43px;
    background: #161719;
    border: 1px solid rgba(243, 243, 248, 0.3);
    box-sizing: border-box;
    border-radius: 10px;
    color: #FCFCFF;
  }
`;

export const InputBox = ({ inputLabel, inputName, ...rest }) => {
  return (
    <StyledInputBox {...rest}>
      <label name={inputName}>{inputLabel}</label>
      <input id={inputName} type="text" />
    </StyledInputBox>);
}