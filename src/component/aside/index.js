import styles from './aside.module.scss';
import Home from './items/home/index.js';
import You from './items/you/index.js';
import Explore from './items/explore/index.js';
import SignIn from './items/signIn/index.js';
import { useState } from 'react';

function Aside() {
  const [state, setState] = useState('');
  return (
    <div
      className={styles['container']}
      onClick={(e) => {
        // setState(e.target.innerHTML);
        console.log(e.target.innerHTML);
      }}
    >
      <Home />
      <hr />
      <You />
      <hr />
      <SignIn />
      <hr />
      <Explore />
      <hr />
      <Explore />
      <hr />
      <Explore />
      <hr />
    </div>
  );
}

export default Aside;
