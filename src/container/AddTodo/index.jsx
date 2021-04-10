import React from 'react';
import styled from 'styled-components';

import { TxtBox, InputBox, CheckboxBox } from 'components';

const StyledAddTodo = styled.div`
  margin-bottom: 25px;
`;

function AddTodo() {
  return (
    <StyledAddTodo>
      <TxtBox><h3 className="addTodo">할 일을 적어주세요!</h3></TxtBox>
      <InputBox
        style={{ marginTop: 20 }}
        inputName="TodoTitle"
        inputLabel="제목을 적어주세요"
      />
      <InputBox
        inputName="TodoDate"
        inputLabel="날짜를 적어주세요"
        style={{ marginTop: 30 }}
      />
    </StyledAddTodo>);
}

export default AddTodo;