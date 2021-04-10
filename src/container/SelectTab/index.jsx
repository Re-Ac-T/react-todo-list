import React from 'react';
import styled from 'styled-components';

import { TxtBox, CheckboxBox, TabBox } from 'components';

const StyledSelectTab = styled.div`
  h4 {
    margin-bottom: 10px;
  }
`;

function SelectTab({ DummyTabList, tab, handleSelectMenu }) {
  return (
    <StyledSelectTab>
      <TxtBox><h4>토픽을 선택해 주세요</h4></TxtBox>
      <TabBox tab={tab} handleSelectMenu={handleSelectMenu} type="selectTab" />
    </StyledSelectTab>);
}

export default SelectTab;