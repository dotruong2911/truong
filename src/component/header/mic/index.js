import styles from './mic.module.scss';

function Mic() {
  return (
    <div className={styles['container']}>
      <i className="bi bi-mic-fill" style={{ fontSize: '25px' }}></i>
    </div>
  );
}

export default Mic;
