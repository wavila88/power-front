
import { useEffect, useState } from 'react'
import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import PreTitle from "@/src/components/layouts/preTitle";
import { useDispatch, useSelector, useStore } from 'react-redux';

import FormGranterPower from '@/src/components/grantersPowers/formGranterPower';
import { SET_POWER_PEOPLE, setAnyState } from "@/src/store/actions/powerAction";
import Router from "next/router";
import Title from "@/src/components/layouts/title";
import Head from "next/head";
import { getReportService } from '@/src/services/createReportService';
import PDFViewer from '@/src/components/report/PDFViewer';




const PowerPeople = () => {
  const content = 'Realización de pago';
  const pageNext = '/pay';
  const pageBack = '/reportView';
  const dispatch = useDispatch();
  const powerReducer = useSelector<any>(state => state.PowerReducer);

  useEffect(() => {
    setReport()
  }, [])

  const [base64, setBase64] = useState<any>();


  const setReport = async () => {
    setBase64(await getReportService(powerReducer))
  }

  return (
    <>
      <Head>
        <title>Reporte</title>
      </Head>
      <PreTitle content={content} />
      <ContainerComponent>
        {base64 ? <PDFViewer base64PDF={base64} />: <center className='margin-top'><h1>Cargando Poder ...</h1></center>}

      </ContainerComponent>
    </>
  )
}

export default PowerPeople;