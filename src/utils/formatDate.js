export const formatDate = (dateString) => {
  if (!dateString) return 'TBA';

  const date = new Date(dateString);

  if (isNaN(date.getTime())) return 'TBA';

  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};

export const formatDateShort = (dateString) => {
  if (!dateString) return 'TBA';

  const date = new Date(dateString);

  if (isNaN(date.getTime())) return 'TBA';

  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  });
};