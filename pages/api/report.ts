// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import rentHouse from './repotUtils/rentHouse';
import createPDFReport from './repotUtils/pdfAnyReport';
import axios from 'axios'

type Data = {
  response: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 
  const description = 'Poder que dan los hermanos a sus cuñados dora y Emanuel para arrendar un Local, propiedad horizontal con un total de 2 pisos construidos y terraza.';
  const ubication = 'Cra 78D BIS B #63a-44 sur';
  const granters = [
    {
      name: 'Aleida Avila Rodriguez', idType: 'Cedula Ciudadania', idNumber: '3454365'
    },
    {
      name: 'Oscar Avila Rodriguez', idType: 'Cedula Ciudadania', idNumber: '5765756'
    },
    {
      name: 'Oswaldo Avila Rodriguez', idType: 'Cedula Ciudadania', idNumber: '4564534'
    },
  ]
  const lawRepresentatives = [
    { name: 'Dora Maria Medrano Pineda', idType: 'Cedula Ciudadania', idNumber: '1012345' },
    { name: 'Emanuel Medrano Pineda', idType: 'Cedula Ciudadania', idNumber: '78.256.123' }
  ]
  const city = 'Bogotá';
  const date = '14 de enero de 2023';


  const query = rentHouse(
    {
      description: description,
      ubication: ubication,
      granters: granters,
      lawRepresentatives: lawRepresentatives
    });


  console.log('QUERY =>  ' + query);

  const response = await makeRequest(query);

  const powerDetails = response[0]?.message?.content;
  console.log('RESPONSE GPT =>  ' + powerDetails);

   const report = await createPDFReport({
      powerDetails: powerDetails,
      city: city,
      date: date,
      granters: granters,
      lawRepresentatives: lawRepresentatives
    })
   
  res.status(200).json({response: report})
  
}



const createPower = async (event:any) => {

  //LAMBDA USE
  const query = rentHouse(
    {
      description: event.description,
      ubication: event.ubication,
      granters: event.granters,
      lawRepresentatives: event.lawRepresentatives
    });
  console.log('QUERY =>  ' + query);

  const response = await makeRequest(query);

  const powerDetails = response[0]?.message?.content;
  console.log('RESPONSE GPT =>  ' + powerDetails);
  // LAMBDA USE
  return await createPDFReport({
    powerDetails: powerDetails,
    city: event.city,
    date: event.date,
    granters: event.granters,
    lawRepresentatives: event.lawRepresentatives
  })
}


const makeRequest = async (query: any) => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: ''
    }
  };

  const body = {
    "model": "gpt-3.5-turbo",
    "messages": [{ "role": "user", "content": query }],
    "temperature": 0.7
  }
  const response = await axios.post('https://api.openai.com/v1/chat/completions', body, config);
  return response.data.choices;
}
