import { Link } from 'react-router-dom';
import Menu from './menu/index.js';
import styles from './menus.module.scss';
import { useState } from 'react';

function Menus() {
  const Lists = [
    'All',
    'Musics',
    'Youth music',
    'Gamings',
    'Live',
    'Drum',
    'Playlists',
    'News',
    'Eurodance',
    'Golden music',
    'Gaming1',
    'Live1',
    'Chill',
  ];

  const [state, setState] = useState('');

  return (
    <ul className={styles['container']}>
      {Lists.map((item, index) => {
        return (
          <Link to={'/' + item}>
            <li
              key={index}
              className={styles['btn']}
              style={
                state === item
                  ? { backgroundColor: '#666', color: 'white' }
                  : {}
              }
              onClick={() => {
                setState(item);
              }}
            >
              <Menu title={item} />
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default Menus;
