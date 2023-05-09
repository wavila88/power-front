
import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import PreTitle from "@/src/components/layouts/preTitle";
import { useDispatch, useSelector } from 'react-redux';

import FormGranterPower from '@/src/components/grantersPowers/formGranterPower';
import { SET_POWER_PEOPLE, setAnyState } from "@/src/store/actions/powerAction";
import Router from "next/router";
import Title from "@/src/components/layouts/title";



const PowerPeople = () => {
  const content = 'Agrega la persona o personas que recibiran el poder.';
  const content2 = 'Puede ser una sola persona o varias.';
  const pageNext = '/description';
  const pageBack = '/granters';
  const dispatch = useDispatch();

  const allGranters = useSelector<any>(state => state.PowerReducer.powerPeople);
  
  const setPowerState = (powerPeopleList:any) => {
    dispatch(setAnyState(SET_POWER_PEOPLE,powerPeopleList))
  }

  const nextPage = () => {
    allGranters.length > 0 && Router.push(pageNext);
  }


  return (
    <>
      <PreTitle content={content} content2={content2} />
      <ContainerComponent>
      <Title>Apoderados</Title>
        <FormGranterPower granterPowerList={allGranters} setUpdateState={setPowerState}/>
      </ContainerComponent>
      <Footer back={pageBack} continue={nextPage} />
    </>
  )
}

export default PowerPeople;