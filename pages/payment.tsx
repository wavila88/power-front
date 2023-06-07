
import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import PreTitle from "@/src/components/layouts/preTitle";
import { useDispatch, useSelector } from 'react-redux';

import FormGranterPower from '@/src/components/grantersPowers/formGranterPower';
import { SET_POWER_PEOPLE, setAnyState } from "@/src/store/actions/powerAction";
import Router from "next/router";
import Title from "@/src/components/layouts/title";
import Head from "next/head";



const PowerPeople = () => {
  const content = 'Realización de pago';
  const pageNext = '';
  const pageBack = '/reportView';
  const dispatch = useDispatch();

  const allGranters = useSelector<any>(state => state.PowerReducer.powerPeople);

  const setPowerState = (powerPeopleList: any) => {
    dispatch(setAnyState(SET_POWER_PEOPLE, powerPeopleList))
  }

  const nextPage = () => {
    (allGranters as any).length > 0 && Router.push(pageNext);
  }


  return (
    <>
      <Head>
        <title>Pago</title>
      </Head>
      <PreTitle content={content} />
      <ContainerComponent>
        <Title>Pago</Title>
        {/* <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="XY7KRLBMV7TDL" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" name="submit" alt="PayPal - The safer, easier way to pay online!" />
          <Image   src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif"/>
        </form> */}

      </ContainerComponent>
      <Footer back={pageBack} continue={nextPage} />
    </>
  )
}

export default PowerPeople;