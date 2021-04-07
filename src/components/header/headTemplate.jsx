import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  // border-bottom: 1px solid #e9ecef;
  
  .user-title {
    margin: 0;
    color: gray;
    font-size: 32px;
    font-weight: 900;
  }
  .application-title {
    margin-top: 4px;
    color: #FFFFFF;
    font-size: 50px;
    font-weight:700;
  }
  .application-subtitle {
    margin-top: 30px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight:700;
  }
  .application-description {
    margin-top: 10px;
    color: gray;
    font-size: 16px;
    font-weight: 400;
  }
`;

function TodoHead() {
    return (
        <TodoHeadBlock>
            <div className='user-title'>포만젤리, 훈스 </div>
            <div className="application-title">Date-Scheduler</div>
            <div className="application-subtitle">여러분의 스케줄을 적어주세요! </div>
            <div className="application-description">스케줄을 등록해주시면 캘린더에 ToDo 리스트가 나와요! </div>
        </TodoHeadBlock>
    );
}

export default TodoHead;
