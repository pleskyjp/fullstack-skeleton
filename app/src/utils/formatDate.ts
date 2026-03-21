export const formatDate = (dateStr: string, locale = 'cs-CZ') =>
  new Date(dateStr).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
