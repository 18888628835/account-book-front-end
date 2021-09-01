import React from 'react';
import { Cell } from 'zarm';

type WrapperPropr = {
  title: string;
  hasArrow?: boolean;
  description?: string;
};
const Wrapper: React.FC<WrapperPropr> = props => {
  const { title, description, hasArrow = false } = props;
  return (
    <section className='bill_container'>
      <Cell hasArrow={hasArrow} title={title} description={description} />
      <div className='bill_wrap'>
        <div className='bill'>{props.children}</div>
      </div>
    </section>
  );
};

export default Wrapper;
