import styles from '../../../styles/components/layouts/preTitle.module.css';

type PreTitleType ={
  content: string
}


const PreTitle = (props: PreTitleType) => {
  return (
    <div className={styles.preTitleContainer}>
        {props.content}
    </div>
  )
}

export default PreTitle;