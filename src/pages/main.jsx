import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tab } from 'components';
import { Header, Date, TodoList } from 'container';
import { DummyTabList } from 'dummy/data';

const StyledMain = styled.div`
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


function Main() {
  const [changeTabMenu, setChageTabMenu] = useState(1);

  const handleChangeMenu = useCallback((id) => {
    setChageTabMenu(id)
  });

  return (
    <StyledMain>
      <Header />
      <Tab tab={DummyTabList} handleChangeMenu={handleChangeMenu} />
      <Date />
      <TodoList changeTabMenu={changeTabMenu} />
    </StyledMain>);
}

export default Main;