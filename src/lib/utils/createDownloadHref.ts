import { MouseEvent } from 'react';

export const createDownloadHref = async (event: MouseEvent<HTMLAnchorElement>, link: { url: string; name: string }) => {
   if (!link) return undefined;

   event.preventDefault();
   const response = await fetch(link.url);
   const blob = await response.blob();
   const url = window.URL.createObjectURL(blob);
   const a = document.createElement('a');
   a.href = url;
   a.download = link.name;
   document.body.appendChild(a);
   a.click();
   a.remove();
   window.URL.revokeObjectURL(url);
};
