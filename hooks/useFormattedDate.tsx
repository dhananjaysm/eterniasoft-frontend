
/**
 * Custom hook to format a date string into a more readable format.
 * @param {string} dateString - The date string to format.
 * @returns {string} - The formatted date string.
 */
function useFormattedDate(dateString) {
    if (!dateString) return '';
  
    const date = new Date(dateString);
    // Format the date directly without useMemo
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
  }
export default useFormattedDate;
