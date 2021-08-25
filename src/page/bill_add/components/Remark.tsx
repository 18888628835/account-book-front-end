import TextField from '@material-ui/core/TextField';
import React, { FC } from 'react';

type P = {
  text: string;
  onChange: (text: string) => void;
};
const Remark: FC<P> = props => {
  const { text, onChange } = props;
  return (
    <section>
      <TextField
        fullWidth
        id='standard-basic'
        label='备注'
        variant='outlined'
        autoComplete='off'
        value={text}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
    </section>
  );
};

export default Remark;
