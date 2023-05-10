import { Button } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

type BannerType = {
  type: 
    'primary'|
    'secondary'|
    'success'|
    'danger'|
    'warning'|
    'info'|
    'light'|
    'dark'
  key: 'string',
  contentMessage: 'string'
}


const AlertMessage =(props: BannerType) => {
  return (
    <>
        <Alert key={props.key} variant={props.type} onClose={() => {}}>
          {props.contentMessage}
          <div className="d-flex justify-content-end">
          <Button onClick={() => {}} variant={`outline-${props.type}`}>
            Cerrar
          </Button>
        </div>
        </Alert>
    </>
  );
}

export default AlertMessage;