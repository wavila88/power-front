import Button from 'react-bootstrap/Button';
import styles from '../../../../styles/components/layouts/buttons.module.css'
import Router from 'next/router';

type ContinueType = {
  back: string,
  continue: string | (() => void),
  nameContinue?: string  
}

const Continue = (props: ContinueType) => {
  const {back, nameContinue = 'Continuar'} = props;
  return (
    <div className={styles.buttonContainer}>
      <div>
        <Button 
          className='radius' 
          variant="outline-dark" 
          size='lg'
          onClick={()=> Router.push(back)}
          >
        Regresar
        </Button>
      </div>
    <div className={styles.backContinue}>
      <Button 
        className='radius' 
        variant="outline-dark" 
        size='lg'
        onClick={()=>{
         if(typeof props.continue !== 'string'){
            props.continue();
         }else{
           Router.push(props.continue)
         } 
        }}
        >
      {nameContinue}
      </Button>
    </div>

    </div>
  )
}

export default Continue;