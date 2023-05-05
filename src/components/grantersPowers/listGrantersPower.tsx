import { useEffect } from 'react';
import styles from '../../../styles/components/granters.module.css'
import { GrantersType } from '@/src/types';

type FormPowerType = {
  setHook: any,
  allGranters: any,
  setIsValidForm: any,
  setShowEditDelete: any
}

const ListGranterPower = (props: FormPowerType ) => {



const sortedArray = [...props.allGranters].sort((a,b) =>{
  const nameA = a.fullName.toUpperCase();
  const nameB = b.fullName.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
});  

const setHookElement = (granter: GrantersType) => {
   props.setHook( {
    index: granter.index,
    fullName: { element: granter.fullName, isInvalid: false, feedBack: '' },
    documentType: { element: granter.documentType, isInvalid: false, feedBack: '' },
    documentNumber: { element: granter.documentNumber, isInvalid: false, feedBack: '' },
  });
  props.setIsValidForm(true);
  props.setShowEditDelete(true);
}

  return(
    <div className={styles.grantersContainer}>
      {sortedArray?.length > 0 && sortedArray.map((granter) =>(
        <>
        <div className={styles.graterCard} onClick={() => setHookElement(granter)}>
          <div className={styles.cardTextContainer}>
          {granter.fullName.split(' ')[0]}
          </div>
        </div>
       
        </>
      )) }
      
    </div>
  );

};

export default ListGranterPower;