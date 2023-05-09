import { useSelector } from 'react-redux';
import styles from '../../styles/components/summary.module.css';


const SummaryDetailed = () => {

  const granters = useSelector(state => state.PowerReducer.granters);
  const powerPeople = useSelector(state => state.PowerReducer.powerPeople);
  const description = useSelector(state => state.PowerReducer.description);
  const details = useSelector(state => state.PowerReducer.details);


  const iterateGranterPowers = (grantersPower: Array<any>): JSX.Element =>
    granters && granters.map((granter, index) => (
      <div>
        <h5>Poderdante {index + 1}</h5>
        <ul>
          <li><strong>Nombre:</strong> {granter.fullName}</li>
          <li><strong>Tipo Documento:</strong> {granter.documentType}</li>
          <li><strong>Numero Documento:</strong> {granter.documentNumber}</li>
        </ul>
      </div>
    ));

  const createInfoContainer = (name: string, content: string): JSX.Element => (
    <>
      <div className={styles.titleInfo +' margin-top'}>
        {name}
      </div>
      <div className={styles.contentInfo}>
      {content}  
      </div>
    </>
  )


  return (
    <>
      <div className={styles.title}>Poderdante(s)</div>
      <div className={styles.column}>
        {iterateGranterPowers(granters)}
      </div>
      <div className={styles.title}>Apoderado(s)</div>
      <div className={styles.column}>
        {iterateGranterPowers(powerPeople)}
      </div>
      <div className={styles.containerDisplayInfo}>
        {createInfoContainer('Descripción', description)}
        {createInfoContainer('Ciudad ', details.city)}
        {createInfoContainer('Fecha Firma', details.singDate)}
      </div>

    </>)
}

export default SummaryDetailed;