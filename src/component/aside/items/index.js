import { Link } from 'react-router-dom';
import styles from './item.module.scss';

function Item({ content, logo }) {
  return (
    <Link to={'/' + content}>
      <div className={styles['container']}>
        <div className={styles['logo']}>{logo} </div>
        <div className={styles['content']}>{content}</div>
      </div>
    </Link>
  );
}

export default Item;
