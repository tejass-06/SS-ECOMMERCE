import './ToastProvider.css';
import { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#18181b',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)',
        },
      }}
    />
  );
};

export default ToastProvider;
