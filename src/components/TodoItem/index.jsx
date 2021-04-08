import React from 'react';
import styled from 'styled-components';

const StyleTodoItem = styled.div`

`;

export function TodoItem({ todos, ...props }) {
  return (
    <StyleTodoItem {...props}>
      <input type="checkbox" value={todos.complete} />
      <div>{todos.Dday}</div>
      <div>{todos.todo}</div>
      <span>delete</span>
    </StyleTodoItem>
  );
}
