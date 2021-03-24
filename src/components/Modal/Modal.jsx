import React, { useCallback, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

import { Container } from './styles';

const Modal = ({ children, onClose, isVideo }) => {
  const handleClose = useCallback(() => {
    document.documentElement.style.overflow = 'auto';
    onClose();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden';
  }, []);

  return (
    <Container isVideo={isVideo}>
      <button onClick={() => handleClose()}>
        <FiX />
      </button>

      {isVideo ? children : <main>{children}</main>}
    </Container>
  );
};

export default Modal;
