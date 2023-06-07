import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const options = { year: 'numeric', month: 'long', day: 'numeric' };
const locale = 'es-ES';
export const formatDate = (date:Date)=>date.toLocaleString(locale, options as any ).replace(/\b\w/g, (l) => l.toUpperCase()).replaceAll('De','de');