import React from 'react';
import styled from 'styled-components';

import {TodoItem} from "components";
import {DummyTodoList} from 'dummy/data';
import {useTodoState} from "../../ToDoContext";

const StyledTodoList = styled.div`
  padding: 25px 0;
  .emptyTxt {
    text-align: center;
    color: #7A7585;
    font-size: 20px;
    font-weight: 600;
  }
`;


function TodoList({changeTabMenu}) {
    const todos = useTodoState();

    const todoLength = DummyTodoList.filter(todo => {
        return todo.root === changeTabMenu;
    }).length;

    return (
        <StyledTodoList>
            {DummyTodoList && changeTabMenu === 'All' ?
                todos.map((todo, index) => {
                    return <TodoItem key={index} todos={todo} id={todo.id}/>
                })
                : todos.filter(todo => {
                return todo.root === changeTabMenu;
            }).map((todo, index) => {
                return <TodoItem key={index} todos={todo} id={todo.id}/>
            })
            }
            {todoLength === 0 && <p className="emptyTxt">리스트가 비어있습니다.</p>}
        </StyledTodoList>);
}

export default TodoList;