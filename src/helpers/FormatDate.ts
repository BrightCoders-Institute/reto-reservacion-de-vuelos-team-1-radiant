export const formatDate = (dateString: string) => {
  const dateObj = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  options.timeZone = 'UTC';
  return dateObj.toLocaleDateString('en-US', options);
};
