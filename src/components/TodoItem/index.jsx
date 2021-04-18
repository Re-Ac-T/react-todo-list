import React from 'react';
import styled from 'styled-components';
import delet from '../../assets/images/delete.png';
import {useTodoDispatch} from "../../ToDoContext";

const StyleTodoItem = styled.div`
  font-family: IBM Plex Sans;
  background: #000000;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.48), 0px 0px 4px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  margin-top: 15px;
  color: #fff;
  display: flex;
  padding: 10px 15px;
  box-sizing: border-box;
  p{
    margin: 0;
  }
`;

const StyledContentBox = styled.div`
  width : 90%;
`
const StyledRoot = styled.div`
  display: flex;
  align-items: center;

  .todo-root {
    color: #7A7585;
  }
  .todo-date {
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #76A9FF;
    margin: 0;
    margin-left: 5px;
  }
`
const StyledContent = styled.div`
  margin-top: 5px;
  input {
    margin: 0;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: #FF8181;
    border: 1px solid #FF8181;
    box-sizing: border-box;
    border-radius: 2px;

    &+p {
      display: inline-block;
      font-size: 20px;
      line-height: 20px;
      vertical-align: top;
      color: #EEECF1;
      margin-left: 5px;                                                                    
    } 
  }
`
const StyledClose = styled.span`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export function TodoItem({todos, id, ...rest}) {
    //Todo : uuid적용해서 해보깅
    const dispatch = useTodoDispatch();

    const onRemove = () => dispatch({type: 'REMOVE', id});

    return (
        <StyleTodoItem {...rest}>
            <StyledContentBox>
                <StyledRoot>
                    <p className="todo-root">{todos.root}</p>
                    <p className="todo-date">{todos.Dday}</p>
                </StyledRoot>
                <StyledContent>
                    <input type="checkbox" value={todos.complete}/>
                    <p>{todos.todo}</p>
                </StyledContent>
            </StyledContentBox>
            <StyledClose onClick={onRemove}><img src={delet} alt="close"/></StyledClose>
        </StyleTodoItem>
    );
}
