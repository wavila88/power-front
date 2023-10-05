const puppeteer = require('puppeteer');

const iterateGranters = (grantersRep) => {
  let elementToReturn = '';
  grantersRep.forEach(element => {
    elementToReturn +=
      `<div class='iterate-div'>
    <div class='text-content'>__________________________________</div>
    <br/>
    <div class='text-content'><strong>Nombre: </strong>${element.fullName}</div>
    <div class='text-content'><strong>Tipo documento: </strong> ${element.documentType}</div>
    <div class='text-content'><strong>Numero documento: </strong> ${element.documentNumber}</div>
</div>`
  });

  return elementToReturn;
}

const createPDFReport = async (event) => {
  const { powerDetails, city, date, granters, lawRepresentatives } = event;

  const chromiumExecutablePath = process.env.GOOGLE_CHROME_BIN;

  console.log(JSON.stringify(event));
  const browser = await puppeteer.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] })

  // Create a new page
  const page = await browser.newPage();

  await page.setContent(`
    <html>
    <head>
      <style>
        body{
          margin-top: 90px;
          margin-left: 60px;
          margin-right: 60px;
  
        }
        .text-content{
          font-size: 12px;
          font-family: Arial;
          text-align: justify;
          margin-bottom: 10px;
        }
        .container-granters{
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .iterate-div{
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <h4>${city}, ${date}</h4>
      <br/>
      <br/>
      <center><strong>A quien interese</strong></center>
      <br/>
      <br/>
      <div class='text-content'>
      ${powerDetails}
      </div>
      <br/>
      <div class='text-content'>
        Atentamente,
      </div>
      <br/>
      <br/>
      <strong>PODERDANTES</strong>
      <br/>
      <br/>
      <br/>
      <div class='container-granters '>
      ${iterateGranters(granters)}
      </div>
      <br/>
      <br/>
      <strong>APODERADOS</strong>
      <br/>
      <br/>
      <br/>
      <div class='container-granters '>
      ${iterateGranters(lawRepresentatives)}
    </div> 
    </body>
  </html>
    `);
  //LOCAL TEST
  const pdfBuffer = await page.pdf({ format: 'A4' });

  // Guardar el archivo PDF en disco
  // await fs.promises.writeFile('reporte.pdf', pdfBuffer);

  // await browser.close();


  // para usar en la lambda
  const pdfData = pdfBuffer.toString('base64');

  await browser.close();
  console.log(pdfData); // Imprimir la representación en base64 del archivo PDF
   return pdfData;

}
export default createPDFReport;