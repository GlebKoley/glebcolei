'use client';
import { useState, useEffect, useCallback } from 'react';

const useLogic = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false);

   useEffect(() => {
      document.body.classList.toggle('burger-menu-open', isOpen);
   }, [isOpen]);

   const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

   return { isOpen, toggle, setIsOpen };
};

export default useLogic;
