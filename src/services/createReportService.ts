import axios from 'axios'

export async function getReportService  ()  {
const res =await axios.post('/api/report');
debugger;
return res.data.response;
}