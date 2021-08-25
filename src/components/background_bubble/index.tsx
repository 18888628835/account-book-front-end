import React from 'react';
import Wrap from './_styles';

const index = props => {
  const { data } = props;
  return (
    <Wrap>
      {data.map(item => (
        <li key={item}>{item}</li>
      ))}
    </Wrap>
  );
};

export default index;
