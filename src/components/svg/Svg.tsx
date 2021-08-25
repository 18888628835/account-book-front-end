import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
const SvgS = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  > svg {
    margin: 0 auto;
    font-size: 26px;
  }
  > span {
    margin-top: 5px;
  }
`;
type P = {
  name: string;
  tagName: string;
};
const Svg: FunctionComponent<P> = props => {
  return (
    <SvgS>
      <svg className='icon' aria-hidden='true'>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
      <span>{props.tagName}</span>
    </SvgS>
  );
};

export default Svg;
