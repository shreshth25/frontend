// notification.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (message, type ='success', options = {}) => {

  if (type=='success')
  {
    toast.success(message, {
        position: options.position || 'top-right',
        autoClose: options.autoClose || 2000,
        hideProgressBar: options.hideProgressBar || false,
        closeOnClick: options.closeOnClick || true,
        pauseOnHover: options.pauseOnHover || true,
        draggable: options.draggable || true,
        progress: options.progress || undefined,
        theme: options.theme || 'dark',
      });
  }
  else{
    toast.error(message, {
        position: options.position || 'top-right',
        autoClose: options.autoClose || 2000,
        hideProgressBar: options.hideProgressBar || false,
        closeOnClick: options.closeOnClick || true,
        pauseOnHover: options.pauseOnHover || true,
        draggable: options.draggable || true,
        progress: options.progress || undefined,
        theme: options.theme || 'dark',
      });
  }

};

export default notify;
