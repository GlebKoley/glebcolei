'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const ModalWindow = ({ onClose, children, isOpen = null }) => {
   useEffect(() => {
      const handleEsc = (e) => {
         if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
   }, [onClose]);

   if (isOpen === null) return null;

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
