export const formatDate = (dateString) => {
  if (!dateString) return 'TBA';
  
  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) return 'TBA';
  
  // Check if time is midnight (00:00) - if so, only show date
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const isMidnight = hours === 0 && minutes === 0;
  
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  
  // Only add time if it's not midnight
  if (!isMidnight) {
    options.hour = '2-digit';
    options.minute = '2-digit';
    options.hour12 = true;
  }
  
  return date.toLocaleDateString('en-US', options);
};

export const formatDateShort = (dateString) => {
  if (!dateString) return 'TBA';
  
  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) return 'TBA';
  
  const options = {
    day: 'numeric',
    month: 'short'
  };
  
  return date.toLocaleDateString('en-US', options);
};
