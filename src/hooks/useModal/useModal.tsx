import React, { useState } from 'react';

const useModal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModalVisible = () => {
    setModalVisible(!modalVisible);
  };

  return { modalVisible, toggleModalVisible };
};

export default useModal;
