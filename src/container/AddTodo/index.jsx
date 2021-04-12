import React, {useState} from 'react';
import styled from 'styled-components';

import {TxtBox, InputBox, CheckboxBox} from 'components';
import {useTodoDispatch, useTodoNextId} from "../../TodoProvider";
import {TodoProvider} from '../../TodoProvider'

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
        setValue('');
        setOpen(false);
        nextId.current += 1;
    };

    return (
        <TodoProvider>
            <StyledAddTodo>
                <TxtBox><h3 className="addTodo">할 일을 적어주세요!</h3></TxtBox>
                <InputBox
                    style={{marginTop: 20}}
                    inputName="TodoTitle"
                    inputLabel="제목을 적어주세요"
                />
                <InputBox
                    inputName="TodoDate"
                    inputLabel="날짜를 적어주세요"
                    style={{marginTop: 30}}
                />
            </StyledAddTodo>
            <StyledSubmit>등록</StyledSubmit>
        </TodoProvider>
    );
}

export default React.memo(AddTodo);