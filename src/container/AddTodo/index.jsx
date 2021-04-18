import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { TxtBox, InputBox, CheckboxBox } from 'components';
import { useTodoDispatch, useTodoNextId } from "../../ToDoContext";
import { DummyTabList } from "../../dummy/data";
import { SelectTab } from "../index";

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


function AddTodo({ selectDate, setSelectDate }) {
    const [todoValue, setTodoValue] = useState('');
    const [dDayValue, setDdayValue] = useState('');
    const [slectTabMenu, setSelectTabMenu] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const start = moment(selectDate.start).format('YYYY-MM-DD');
    const end = moment(selectDate.end).format('YYYY-MM-DD');
    let checkSelectDate = '';
    if (start && end !== 'Invalid date') {
        checkSelectDate = start !== end ? `${start} ~ ${end}` : `${start}`;
    }

    const onTodoChange = e => setTodoValue(e.target.value);
    const onDayChange = e => setDdayValue(e.target.value)
    const handleSelectMenu = useCallback((id) => {
        setSelectTabMenu(id)
    });
    const onSubmit = e => {
        e.preventDefault(); // 새로고침 방지
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                todo: todoValue,
                Dday: checkSelectDate,
                root: slectTabMenu,
                done: false
            }
        });
        setTodoValue('');
        setSelectDate({ start: '', end: '' });
        setSelectTabMenu('')

        nextId.current += 1;
    };

    return (
        <StyledAddTodo>
            <form onSubmit={onSubmit}>
                <TxtBox><h3 className="addTodo">할 일을 적어주세요!</h3></TxtBox>
                <InputBox
                    style={{ marginTop: 20 }}
                    placeholder="저녁식사 하기"
                    inputName="TodoTitle"
                    inputLabel="제목을 적어주세요"
                    onChange={onTodoChange}
                    value={todoValue}
                />
                <InputBox
                    style={{ marginTop: 30 }}
                    placeholder="2021-05-06"
                    inputName="TodoDate"
                    inputLabel="날짜를 적어주세요"
                    onChange={onDayChange}
                    value={checkSelectDate}
                />
                <SelectTab tab={DummyTabList}
                    handleSelectMenu={handleSelectMenu}
                    value={slectTabMenu}
                />
                <StyledSubmit>등록</StyledSubmit>
            </form>
        </StyledAddTodo>
    );
}

export default React.memo(AddTodo);

