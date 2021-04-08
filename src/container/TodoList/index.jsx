import React from 'react';
import styled from 'styled-components';

import { TodoItem } from "components";
import { DummyTodoList } from 'dummy/data';

const StyledTodoList = styled.div`
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

function TodoList({ changeTabMenu }) {
  console.log(DummyTodoList.length > 0)
  return (
    <StyledTodoList>
      {DummyTodoList.length > 0 ?
        changeTabMenu === 1 ?
          DummyTodoList.map((todo, index) => {
            return <TodoItem key={index} todos={todo} />
          })
          : DummyTodoList.filter(todo => {
            return todo.id === changeTabMenu;
          }).map((todo, index) => {
            return <TodoItem key={index} todos={todo} />
          })
        :
        <div>목록을 추가해 주세요.</div>
      }
    </StyledTodoList >);
}

export default TodoList;