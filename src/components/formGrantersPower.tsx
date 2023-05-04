import styles from '../../styles/components/granters.module.css'

type FormPowerType = {
  setHook: any,
  allGranters: any
}

const FormGranterPower = (props: FormPowerType ) => {

const setHookElement = (granter) => {
  debugger
   props.setHook( {
    index: granter.index,
    fullName: { element: granter.fullName, isInvalid: false, feedBack: '' },
    documentType: { element: granter.documentType, isInvalid: false, feedBack: '' },
    documentNumber: { element: granter.documentNumber, isInvalid: false, feedBack: '' },
  })
}

  return(
    <div className={styles.grantersContainer}>
      {props.allGranters?.length > 0 && props.allGranters.map((granter) =>(
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

export default FormGranterPower;