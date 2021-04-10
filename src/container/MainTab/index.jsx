import React from 'react';
import styled from 'styled-components';

import { TabBox } from 'components';

const StyledMainTab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

function MainTab({ tab, handleChangeMenu }) {
  return (
    <StyledMainTab>
      <TabBox tab={tab} handleChangeMenu={handleChangeMenu} />
    </StyledMainTab>);
}

export default MainTab;