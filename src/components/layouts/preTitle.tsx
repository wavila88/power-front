import styles from '../../../styles/components/layouts/preTitle.module.css';

type PreTitleType ={
  content: string,
  content2?: string,
}


const PreTitle = (props: PreTitleType) => {
  return (
    <div className={styles.preTitleContainer}>
        <div className={styles.contentInfo}>{props.content}</div>
        <br></br>
        <div className={styles.contentInfo}>{props.content2}</div>
    </div>
  )
}

export default PreTitle;