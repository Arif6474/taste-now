import React, { useState } from 'react';

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {isModalOpen && (
        <div>
          <div>Modal Content</div>
          <button onClick={handleCloseModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default Modal;