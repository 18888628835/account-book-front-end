import React from 'react';
import styled from 'styled-components';
const Wrap = styled.main`
  padding-left: 2vw;
  padding-right: 2vw;
  overflow-y: scroll;
  position: relative;
`;
const PanelContainer = props => {
  return <Wrap>{props.children}</Wrap>;
};

export default PanelContainer;
