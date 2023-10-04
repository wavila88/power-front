import axios from 'axios'

export async function getReportService  (powerReducer: any)  {
    debugger;
const res =await axios.post('/api/report',powerReducer);
debugger;
return res.data.response;
}