import { useSelector } from 'react-redux';
import styles from '../../styles/components/summary.module.css';


const SummaryDetailed = () => {

  const granters = useSelector<any>(state => state.PowerReducer.granters);
  const powerPeople = useSelector<any>(state => state.PowerReducer.powerPeople);
  const description = useSelector<any>(state => state.PowerReducer.description);
  const details = useSelector<any>(state => state.PowerReducer.details);


  const iterateGranterPowers = (grantersPower: Array<any>): JSX.Element =>
    granters && (granters as any).map((granter: any, index: any) => (
      <div key={index}>
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
        {iterateGranterPowers(granters as any)}
      </div>
      <div className={styles.title}>Apoderado(s)</div>
      <div className={styles.column}>
        {iterateGranterPowers(powerPeople as any)}
      </div>
      <div className={styles.containerDisplayInfo}>
        {createInfoContainer('Descripción', description as any)}
        {createInfoContainer('Ciudad ', (details as any) ?.city)}
        {createInfoContainer('Fecha Firma', (details as any)?.singDate)}
      </div>

    </>)
}

export default SummaryDetailed;