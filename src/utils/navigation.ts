import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

/**
 * Navigates to a section on the same or different page
 * @param sectionId The ID of the section to scroll to
 * @param router The Next.js router instance
 * @param basePath Optional base path if the section is on a specific page
 */
export const navigateToSection = (
  sectionId: string,
  router: AppRouterInstance,
  basePath: string = '/'
): void => {
  // Check if we're already on the correct path
  if (typeof window !== 'undefined') {
    const currentPath = window.location.pathname;
    const isOnCorrectPath = currentPath === basePath;

    if (!isOnCorrectPath) {
      // Navigate to the base path first
      router.push(basePath);
      
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 300);
    } else {
      // Already on the correct path, just scroll
      scrollToSection(sectionId);
      
      // Update URL without causing a navigation
      updateUrlWithoutNavigation(sectionId);
    }
  }
};

/**
 * Scrolls to a section by ID
 * @param sectionId The ID of the section to scroll to
 */
export const scrollToSection = (sectionId: string): void => {
  if (typeof window !== 'undefined') {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      updateUrlWithoutNavigation(sectionId);
    }
  }
};

/**
 * Updates the URL with a hash without causing a page reload or navigation
 * @param hash The hash to add to the URL (without the # symbol)
 */
export const updateUrlWithoutNavigation = (hash: string): void => {
  if (typeof window !== 'undefined') {
    // Get the current URL
    const url = new URL(window.location.href);
    
    // Only update if the hash is different
    if (url.hash !== `#${hash}`) {
      // Replace the hash
      window.history.replaceState(
        {}, 
        '', 
        `${window.location.pathname}${window.location.search}#${hash}`
      );
    }
  }
}; 