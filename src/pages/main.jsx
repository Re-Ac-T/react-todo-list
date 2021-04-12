import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainTab, Header, Date, TodoList, AddTodo, SelectTab } from 'container';
import { DummyTabList } from 'dummy/data';

const StyledMain = styled.div`
  padding: 30px 20px 90px;
  box-sizing: border-box;
  width: 512px;
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
  const [changeTabMenu, setChageTabMenu] = useState('all');
  const [slectTabMenu, setSelectTabMenu] = useState('');

  const handleChangeMenu = useCallback((id) => {
    setChageTabMenu(id)
  });

  const handleSelectMenu = useCallback((id) => {
    setSelectTabMenu(id)
  });

  return (
    <StyledMain>
      <Header />
      <MainTab tab={DummyTabList} handleChangeMenu={handleChangeMenu} />
      <Date />
      <TodoList changeTabMenu={changeTabMenu} />
      <AddTodo />
      <SelectTab tab={DummyTabList} handleSelectMenu={handleSelectMenu} />
    </StyledMain>);
}

export default Main;