import { Input } from 'antd';
import React, { useEffect, useRef, useState } from 'react';

enum PayType {
  '支出' = 1,
  '收入',
}
const EditableRow = props => {
  const { text, onSubmit, payType } = props;
  const inputRef = useRef<any>(null);
  const [editable, setEditable] = useState(false);

  const toggleEditable = () => {
    setEditable(!editable);
  };

  const onSave = (e: React.FocusEvent<HTMLInputElement>) => {
    toggleEditable();
    if (e.target.value !== text) onSubmit(e.target.value);
  };

  useEffect(() => {
    if (editable) {
      inputRef.current.focus();
    }
  }, [editable]);

  const onClick = () => toggleEditable();

  return (
    <div>
      {editable ? (
        <Input ref={inputRef} defaultValue={text} onBlur={onSave} />
      ) : (
        <div onClick={onClick}>
          {payType === PayType['支出'] ? `-${text}` : text}
        </div>
      )}
    </div>
  );
};

export default EditableRow;
