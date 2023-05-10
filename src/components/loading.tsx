import Spinner from 'react-bootstrap/Spinner';
import styles from '../../styles/components/loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <Spinner animation="grow" style={{ width: "10rem", height: "10rem" }}  role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;