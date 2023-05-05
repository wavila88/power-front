
import ContainerComponent from "@/src/components/layouts/containerContent";
import Footer from "@/src/components/layouts/footer";
import PreTitle from "@/src/components/layouts/preTitle";
import { useDispatch, useSelector } from 'react-redux';

import FormGranterPower from '@/src/components/grantersPowers/formGranterPower';
import { SET_GRANTERS, setAnyState } from "@/src/store/actions/powerAction";



const Granters = () => {
  const content = 'Agrega la persona o personas que otorgaran el poder.';
  const content2 = 'Puede ser una sola persona o varias.';
  const pageNext = '/powerPeople';
  const pageBack = '/country';
  const dispatch = useDispatch();

  const allGranters = useSelector<any>(state => state.PowerReducer.granters);
  
  const setGrantersState = (grantersList:any) => {
    dispatch(setAnyState(SET_GRANTERS,grantersList))
  }


  return (
    <>
      <PreTitle content={content} content2={content2} />
      <ContainerComponent>
        <FormGranterPower granterPowerList={allGranters} setUpdateState={setGrantersState}/>
      </ContainerComponent>
      <Footer back={pageBack} continue={pageNext} />
    </>
  )
}

export default Granters;