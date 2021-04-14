import React from 'react';
import {createGlobalStyle} from 'styled-components';

import TodoTemplate from 'layout';
import {TodoProvider} from "./TodoProvider";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
    font-family: IBM Plex Sans;
  }
`;

function App() {
    return (
        <>
            <TodoProvider>
                <GlobalStyle/>
                <TodoTemplate/>
            </TodoProvider>
        </>
    );
}

export default App;
