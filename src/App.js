import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/base/baseTemplate';
import TodoHead from "./components/header/headTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
      <>
        <GlobalStyle />
        <TodoTemplate>
            <TodoHead/>
        </TodoTemplate>
      </>
  );
}

export default App;
