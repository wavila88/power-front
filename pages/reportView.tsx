
import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import { useDispatch } from 'react-redux';
import Head from "next/head";
import Loading from "@/src/components/loading";
import PreTitle from "@/src/components/layouts/preTitle";



const ReportView = () => {
  const content = 'Asegurate de que todos los detalles esten listos antes de crear tu poder.';
  const pageNext = '/reportView';
  const pageBack = '/description';
  const dispatch = useDispatch();



  return (
    <>
       <Head>
        <title>Reporte</title>
      </Head>
      <Loading/>
      <PreTitle content={content} />
      <ContainerComponent>
      {/* <Title>Resumen</Title> */}

 
      </ContainerComponent>
      <Footer back={pageBack} continue={pageNext}/>
    </>
  )
}

export default ReportView;