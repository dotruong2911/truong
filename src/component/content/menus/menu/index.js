import styles from './menu.module.scss';

function Menu({ title }) {
  return <div className={styles['container']}>{title}</div>;
}

export default Menu;
