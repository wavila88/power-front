import React from 'react';

type PDFType ={
  base64PDF: string
}

const PDFViewer = (props: PDFType) => {
  const pdfData = `data:application/pdf;base64,${props.base64PDF}`;

  return (
    <div>
      <embed src={pdfData} type="application/pdf" width="100%" height="600px" />
      {/* Opción alternativa utilizando el elemento <object> */}
      {/* <object data={pdfData} type="application/pdf" width="100%" height="600px" /> */}
    </div>
  );
};

export default PDFViewer;