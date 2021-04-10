import React from 'react';
import styled from 'styled-components';

const StyledCheckBox = styled.div`
`;


export const CheckboxBox = ({ DummyTabList }) => {
  console.log(DummyTabList)
  return (
    <StyledCheckBox>
      {DummyTabList && DummyTabList.filter(item => item.id !== 1).map((item, index) => {
        return (
          <>
            <label name={`check-${index}`}>{item.title}</label>
            <input id={`check-${index}`} type="checkbox" />
          </>
        )
      })}

    </StyledCheckBox>);
}
