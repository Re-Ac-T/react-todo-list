import React, {useState} from 'react';
import styled from 'styled-components';

import {TxtBox, InputBox, CheckboxBox} from 'components';
// import {useTodoDispatch, useTodoNextId} from "../../TodoProvider";
import {useTodoDispatch, useTodoNextId} from "../../ToDoContext";

const StyledAddTodo = styled.div`
  margin-bottom: 25px;
`;

const StyledSubmit = styled.button`
  width: 100%;
  height: 60px;
  background: #76A9FF;
  border-radius: 10px;
  color: #000;
  font-weight: 700;
  font-size: 24px
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function AddTodo() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);
    const onChange = e => setValue(e.target.value);
    const onSubmit = e => {
        e.preventDefault(); // 새로고침 방지
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        console.log(nextId.current)
        setValue('');
        nextId.current += 1;
    };

    return (
        <StyledAddTodo>
            <form onSubmit={onSubmit}>
                <TxtBox><h3 className="addTodo">할 일을 적어주세요!</h3></TxtBox>
                <Input
                    style={{marginTop: 20}}
                    autoFocus
                    placeholder="할 일을 입력 후, Enter 를 누르세요"

                    // inputName="TodoTitle"
                    // inputLabel="제목을 적어주세요"
                    onChange={onChange}
                    value={value}
                />
                <Input
                    inputName="TodoDate"
                    inputLabel="날짜를 적어주세요"
                    style={{marginTop: 30}}
                />
                <StyledSubmit>등록</StyledSubmit>
            </form>
        </StyledAddTodo>
    );
}

export default React.memo(AddTodo);