/* eslint-disable no-unused-expressions */
import { toast } from 'react-toastify';

const notify = (type, message, custom = {}) => {
  const configs = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    ...custom,
  };

  if (!['success', 'error', 'warn', 'info', ''].includes(type)) {
    throw new Error('Invalid type sent to notify only accepts success, error, or warning only');
  }

  if (type) {
    toast[type](message, configs);
  } else {
    toast(message, configs);
  }
};

export default notify;
