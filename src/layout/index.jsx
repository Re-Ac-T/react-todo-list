import React from 'react';
import styled from 'styled-components';
import { Tab } from 'components';
import { Header, Date } from 'container';
import Main from 'pages/main';

// pc , mobile
const TodoTemplateBlock = styled.div`
  padding: 30px 90px;
  box-sizing: border-box;
`;

function TodoTemplate() {
  return (
    <TodoTemplateBlock>
      <Main />
    </TodoTemplateBlock>);
}

export default TodoTemplate;