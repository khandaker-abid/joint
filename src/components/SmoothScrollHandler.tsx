'use client';

import { useEffect } from 'react';

const SmoothScrollHandler = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Check if the clicked element or its parent is an anchor link
      const target = e.target as HTMLElement;
      let linkElement: HTMLAnchorElement | null = null;
      
      // Check if the clicked element is a link
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        linkElement = target;
      } 
      // Check if one of its parents is a link
      else {
        linkElement = target.closest('a[href^="#"]');
      }

      if (linkElement) {
        const href = linkElement.getAttribute('href');
        if (href) {
          e.preventDefault();
          
          // Get the target element
          const targetElement = document.querySelector(href);
          if (targetElement) {
            // Calculate offset (account for sticky navbar)
            const offset = 90; // Set to exact navbar height to make section touch bottom of navbar
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            // Scroll to the element smoothly
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    // Add event listener to the document
    document.addEventListener('click', handleClick);
    
    // Also handle direct navigation to hash links (like when loading a page with a hash)
    const handleHashNavigation = () => {
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          const offset = 80; // 72px navbar height + some extra spacing
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          // Small timeout to ensure DOM is ready
          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 10);
        }
      }
    };

    // Handle initial hash navigation
    handleHashNavigation();

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return null;
};

export default SmoothScrollHandler;