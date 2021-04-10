import React from 'react';
import styled from 'styled-components';

import { TodoItem } from "components";
import { DummyTodoList } from 'dummy/data';

const StyledTodoList = styled.div`
  padding: 25px 0;
  .emptyTxt {
    text-align: center;
    color: #7A7585;
    font-size: 20px;
    font-weight: 600;
  }
`;


function TodoList({ changeTabMenu }) {
  const todoLength = DummyTodoList.filter(todo => {
    return todo.id === changeTabMenu;
  }).length;

  return (
    <StyledTodoList>
      { DummyTodoList && changeTabMenu === 1 ?
        DummyTodoList.map((todo, index) => {
          return <TodoItem key={index} todos={todo} />
        })
        : DummyTodoList && DummyTodoList.filter(todo => {
          return todo.id === changeTabMenu;
        }).map((todo, index) => {
          return <TodoItem key={index} todos={todo} />
        })
      }
      {todoLength === 0 && <p className="emptyTxt">리스트가 비어있습니다.</p>}
    </StyledTodoList >);
}

export default TodoList;