import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
const SvgS = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  > svg {
    margin: 0 auto;
    font-size: 2.11rem;
  }
  > span {
    margin-top: 0.41rem;
    font-size: 0.98rem;
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
