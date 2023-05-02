import Button from 'react-bootstrap/Button';
import styles from '../../../../styles/components/layouts/buttons.module.css'
import Router from 'next/router';

type ContinueType = {
  back: string,
  continue: string  
}

const Continue = (props: ContinueType) => {
  return (
    <div className={styles.buttonContainer}>
      <div>
        <Button 
          className='radius' 
          variant="outline-dark" 
          size='lg'
          onClick={()=> Router.push(props.back)}
          >
        Regresar
        </Button>
      </div>
    <div className={styles.backContinue}>
      <Button 
        className='radius' 
        variant="outline-dark" 
        size='lg'
        onClick={()=> Router.push(props.continue)}
        >
      Continuar
      </Button>
    </div>

    </div>
  )
}

export default Continue;