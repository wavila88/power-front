import styles from '../../../styles/components/layouts/title.module.css'


const Title = (props: any) => {
  return (
  <div className={styles.titleContainer}>
    {props.children}
  </div>)
}

export default Title;