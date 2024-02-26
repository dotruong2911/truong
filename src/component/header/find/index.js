import { useState } from 'react';
import styles from './search.module.scss';
import Mic from '../mic/index.js';

function Search() {
  const [state, setState] = useState('none');

  return (
    <div className={styles['container']}>
      <div className={styles['search']}>
        <div style={{ display: state }}>
          <i className={'bi bi-search'}></i>
        </div>
        <input
          className={styles['input']}
          onFocus={() => setState('block')}
          onBlur={() => setState('none')}
          type="text"
          placeholder="Tìm kiếm"
          style={{ width: '300px', height: '100%', border: 'none' }}
        ></input>
      </div>
      <div className={styles['find']}>
        <i className="bi bi-search"></i>
      </div>
      <Mic />
    </div>
  );
}

export default Search;
