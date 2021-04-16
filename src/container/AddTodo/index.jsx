// import React, {useState} from 'react';
// import styled from 'styled-components';
//
// import {TxtBox, InputBox, CheckboxBox} from 'components';
// import {useTodoDispatch, useTodoNextId} from "../../ToDoContext";
//
// const StyledAddTodo = styled.div`
//   margin-bottom: 25px;
// `;
//
// const StyledSubmit = styled.button`
//   width: 100%;
//   height: 60px;
//   background: #76A9FF;
//   border-radius: 10px;
//   color: #000;
//   font-weight: 700;
//   font-size: 24px
// `;
//
// const Input = styled.input`
//   padding: 12px;
//   border-radius: 4px;
//   border: 1px solid #dee2e6;
//   width: 100%;
//   outline: none;
//   font-size: 18px;
//   box-sizing: border-box;
// `;
//
// function AddTodo() {
//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState('');
//
//     const dispatch = useTodoDispatch();
//     const nextId = useTodoNextId();
//     console.log(nextId)
//
//     const onToggle = () => setOpen(!open);
//     const onChange = e => setValue(e.target.value);
//     const onSubmit = e => {
//         e.preventDefault(); // 새로고침 방지
//         console.log(nextId.current)
//         dispatch({
//             type: 'CREATE',
//             todo: {
//                 id: nextId.current,
//                 text: value,
//                 done: false
//             }
//         });
//         setValue('');
//         setOpen(false);
//
//         nextId.current += 1;
//     };
//
//
//     return (
//         <StyledAddTodo>
//             <form onSubmit={onSubmit}>
//                 <TxtBox><h3 className="addTodo">할 일을 적어주세요!</h3></TxtBox>
//                 <Input
//                     style={{marginTop: 20}}
//                     autoFocus
//                     placeholder="할 일을 입력 후, Enter 를 누르세요"
//
//                     // inputName="TodoTitle"
//                     // inputLabel="제목을 적어주세요"
//                     onChange={onChange}
//                     value={value}
//                 />
//                 {/*<Input*/}
//                 {/*    inputName="TodoDate"*/}
//                 {/*    inputLabel="날짜를 적어주세요"*/}
//                 {/*    style={{marginTop: 30}}*/}
//                 {/*/>*/}
//                 <StyledSubmit>등록</StyledSubmit>
//             </form>
//         </StyledAddTodo>
//     );
// }
//
// export default React.memo(AddTodo);

import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import {useTodoDispatch, useTodoNextId} from "../../ToDoContext";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
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


function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();
    console.log(nextId);
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
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input
                            autoFocus
                            placeholder="할 일을 입력 후, Enter 를 누르세요"
                            onChange={onChange}
                            value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd/>
            </CircleButton>
        </>
    );
}

export default React.memo(TodoCreate);

// function TodoCreate() {
//     const [open, setOpen] = useState(false);
//
//     const onToggle = () => setOpen(!open);
//
//     return (
//         <>
//             {open && (
//                 <InsertFormPositioner>
//                     <InsertForm>
//                         <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
//                     </InsertForm>
//                 </InsertFormPositioner>
//             )}
//             <CircleButton onClick={onToggle} open={open}>
//                 <MdAdd />
//             </CircleButton>
//         </>
//     );
// }
//
// export default TodoCreate;
