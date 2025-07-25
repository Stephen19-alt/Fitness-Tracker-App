// This file defines a custom hook for displaying toast notifications in the application.
import { useState } from 'react';

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = ({ title, description, variant = 'default' }) => {
    const id = Date.now();
    setToasts([...toasts, { id, title, description, variant }]);
    // You can enhance this with timeout removal logic later
    console.log(`[${variant.toUpperCase()}] ${title}: ${description}`);
  };

  return { toast, toasts };
}
