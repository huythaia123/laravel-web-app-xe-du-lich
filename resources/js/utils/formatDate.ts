import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return format(date, 'dd/MM/yyyy HH:mm', { locale: vi });
};

export default formatDate;
