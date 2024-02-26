import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './header.module.scss';
import logo from '../../assets/image/youtube.jpg';
import Find from './find/index.js';
import Private from './private/index.js';

function Header() {
  return (
    <div className={styles['container']}>
      <div>
        <i className="bi bi-list" style={{ fontSize: '20px' }}></i>
        <img src={logo} style={{ height: '60px' }} alt="youtube"></img>
      </div>
      <Find />
      <Private />
    </div>
  );
}

export default Header;
