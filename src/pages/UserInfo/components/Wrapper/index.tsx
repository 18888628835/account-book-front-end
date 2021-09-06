import React from 'react';
import { Cell } from 'zarm';

type WrapperPropr = {
  title: string;
  hasArrow?: boolean;
  description?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
const Wrapper: React.FC<WrapperPropr> = props => {
  const {
    title,
    description = '',
    hasArrow = false,
    onClick,
    children,
  } = props;
  return (
    <section className='bill_container'>
      <Cell
        hasArrow={hasArrow}
        title={title}
        description={description}
        onClick={onClick}
      />
      <div className='bill_wrap'>
        <div className='bill'>{children}</div>
      </div>
    </section>
  );
};

export default Wrapper;
