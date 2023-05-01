import styles from '../../../styles/components/layouts/containerContent.module.css';


const ContainerComponent = (props: any) => {
  return (
    <div className={styles.containerContent}>
        {props.children}
    </div>
  )
};

export default ContainerComponent