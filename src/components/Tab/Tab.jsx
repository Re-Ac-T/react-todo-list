import React, { } from 'react';
import styled from 'styled-components';

const StyleTab = styled.div`
  width: 512px;
  height: 768px;

  position: relative; 
  background: #2A2731;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

export function Tab({ tab, handleChangeMenu, ...props }) {
  return (
    <StyleTab {...props}>
      {tab && tab.map((title, index) => {
        return (
          <div key={index} onClick={() => handleChangeMenu(title.id)}>{title.title}</div>
        )
      })}
    </StyleTab>
  );
}
