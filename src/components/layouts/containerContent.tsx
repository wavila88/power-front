import { useSelector } from 'react-redux';
import styles from '../../../styles/components/layouts/containerContent.module.css';
import AlertMessage from '../alertBanner';


const ContainerComponent = (props: any) => {

  const alertMessages = useSelector(state => state.UtilsReducer.bannerMessages);
  return (
    <div className={styles.containerContent}>
   
      {
        alertMessages.length > 0 && alertMessages.map((alert, index) => (
          <AlertMessage key={index} contentMessage={alert.message} type={alert.type} />
        ))
      }
      {props.children}
    </div>
  )
};

export default ContainerComponent