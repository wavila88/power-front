import { useSelector } from 'react-redux';
import styles from '../../../styles/components/layouts/containerContent.module.css';
import AlertMessage from '../alertBanner';


const ContainerComponent = (props: any) => {

  const alertMessages = useSelector<any>(state => state.UtilsReducer.bannerMessages);
  return (
    <div className={styles.containerContent}>
   
      {
        (alertMessages as any).length > 0 && (alertMessages as any).map((alert: any, index: any) => (
          <AlertMessage key={index} contentMessage={alert.message} type={alert.type} />
        ))
      }
      {props.children}
    </div>
  )
};

export default ContainerComponent