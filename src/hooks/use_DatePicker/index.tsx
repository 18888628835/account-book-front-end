import React, { useState } from 'react';

const useDatePicker = () => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const toggleDatePickerVisible = () => {
    setDatePickerVisible(!datePickerVisible);
  };
  return { toggleDatePickerVisible, datePickerVisible };
};

export default useDatePicker;
