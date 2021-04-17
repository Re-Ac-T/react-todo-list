import React, { } from 'react';
import styled, { css } from 'styled-components';

const StyleTabBox = styled.div`
  width: 95%;
  background: #17151C;
  border-radius: 10px;
  padding: 5px;
  box-sizing: border-box;
  font-weight: 600;
  text-align: center;

  input {
    display: none;
    &:checked + label {
      background: black;
      color: #fff;
    }
  }

  label {
    min-width: 100px;
    min-height: 40px;
    border-radius: 10px;
    text-align: center;
    line-height: 40px;
    display: inline-block;
    color: #7A7585;
  }

  ${(props) =>
    props.type === "selectTab" &&
    css`
    margin: 0 0 60px;
    background: transparent;
    text-align: left;
    padding: 0;

    input {
      &:checked + label {
        background: #76A9FF;
        color: #fff;
      }
    }
  
    label {
      width: 64px;
      height: 30px;
      background: #FF8181;
      border-radius: 30px;
      color: #fff;
      margin-right: 10px;
      
      &:last-child {
      margin-right: 0;

      }
    }
    `}
    
`;

export function TabBox({ tab, handleChangeMenu, handleSelectMenu, type, ...rest }) {
  console.log(tab)
  // todo: refactoring
  return (
    <StyleTabBox type={type} {...rest}>
      {tab && tab.map((title, index) => {
        return (
          <>
            {type === 'selectTab' ?
              <>
                <input type="radio" id={`radio-main-${index}`} name="checkTab" value={title} onClick={() => handleSelectMenu(title.title)} />
                <label for={`radio-main-${index}`}>{title.title}</label>
              </>
              :
              <>
                <input type="radio" id={`radio-select-${index}`} name="checkTab" value={title} onClick={() => handleChangeMenu(title.title)} />
                <label for={`radio-select-${index}`}>{title.title}</label>
              </>
            }
          </>
        )
      })}
    </StyleTabBox>
  );
}
