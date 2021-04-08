import React from 'react';
import { createGlobalStyle } from 'styled-components';

import TodoTemplate from 'layout';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate />
    </>
  );
}

export default App;
