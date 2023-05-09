
import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import PreTitle from "@/src/components/layouts/preTitle";
import { useDispatch } from 'react-redux';

import Title from "@/src/components/layouts/title";
import Head from "next/head";
import SummaryDetailed from "@/src/components/sumaryDetailed";



const Summary = () => {
  const content = 'Asegurate de que todos los detalles esten listos antes de crear tu poder.';
  const pageNext = '/aditionalDetails';
  const pageBack = '/description';
  const dispatch = useDispatch();



  return (
    <>
       <Head>
        <title>Resumen</title>
      </Head>
      <PreTitle content={content} />
      <ContainerComponent>
      {/* <Title>Resumen</Title> */}

      <SummaryDetailed/>
      </ContainerComponent>
      <Footer back={pageBack} continue={pageNext} />
    </>
  )
}

export default Summary;