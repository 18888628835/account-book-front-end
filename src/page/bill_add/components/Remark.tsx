import TextField from '@material-ui/core/TextField';
import React, { FC } from 'react';

type P = {
  remark: string;
  onChange: (remark: string) => void;
};
const Remark: FC<P> = props => {
  const { remark, onChange } = props;
  return (
    <section>
      <TextField
        fullWidth
        id='standard-basic'
        label='备注'
        variant='outlined'
        autoComplete='off'
        value={remark}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </section>
  );
};

export default Remark;
