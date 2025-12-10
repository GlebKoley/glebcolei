'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalWindowProps {
   onClose: () => void;
   children: React.ReactNode;
   openIndex: number;
}

const ModalWindow = ({ onClose, children, openIndex = -1 }: ModalWindowProps) => {
   useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
         if (event.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
   }, [onClose]);

   if (openIndex === -1) return null;

   return createPortal(
      <div
         onClick={onClose}
         className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      >
         <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
               onClick={onClose}
               className="tablet:hover:scale-105 tablet:hover:rotate-90 tablet:-right-8 absolute -top-10 -right-2 z-50 transition-transform duration-200"
            >
               <img width={30} height={30} alt="close" src="/close-icon.svg" />
            </button>

            <div className="modal-window-styles animate-fadeIn">{children}</div>
         </div>
      </div>,
      document.body,
   );
};

export default ModalWindow;
