
import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import { useEffect, useState } from 'react';

import Head from "next/head";
import Loading from "@/src/components/loading";
import PreTitle from "@/src/components/layouts/preTitle";
import { createReport, report } from "@/src/utils/reportView.utils";

import styles from '../styles/components/reportView.module.css';




const ReportView = () => {
  const content = 'Aqui puedes visualizar tu Poder.';
  const pageNext = '/payment';
  const pageBack = '/summary';

  // Create new plugin instance
  // document.getElementById('pdf-viewer').addEventListener('contextmenu', function (event) {
  //   event.preventDefault();
  // });

  return (
    <>
      <Head>
        <style>
          {`
            .pdf-object::-webkit-media-controls-enclosure {
              display: none !important;
            }
          `}
        </style>
      </Head>
      {/* <Document file="http://africau.edu/images/default/sample.pdf">
        <Page pageNumber={1} />
      </Document> */}
  
  
      <PreTitle content={content}/>
      
      

      <ContainerComponent>
      <div className={styles.hide}/>
        <object id="pdf-viewer" data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="100%">
          <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
        </object>
      </ContainerComponent>
      <Footer nameContinue="Descargar Poder" back={pageBack} continue={pageNext}/>

    </>
  )
}

export default ReportView;