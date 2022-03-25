import { useState } from 'react';
import { optimizeFonts } from '../../next.config';

const useAlert = () => {
  const defaultOpstions = {
    active: false,
    message: '',
    type: '',
    autoClose: true,
  };
  const [alert, setAlert] = useState({
    ...defaultOpstions,
    ...optimizeFonts,
  });
  const toggleAlert = () => {
    setAlert(!alert.active);
  };
  return {
    alert,
    setAlert,
    toggleAlert,
  };
};

export default useAlert;
