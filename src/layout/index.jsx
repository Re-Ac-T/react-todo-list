import React from 'react';
import styled from 'styled-components';
import { Tab } from 'components';
import { Header, Date } from 'container';
import Main from 'pages/main';

// pc , mobile
const TodoTemplateBlock = styled.div`

`;

function TodoTemplate({ children }) {
  return (
    <TodoTemplateBlock>
      <Main />
    </TodoTemplateBlock>);
}

export default TodoTemplate;