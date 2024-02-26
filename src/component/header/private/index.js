import { Routes, Route, Link } from 'react-router-dom';
import styles from './private.module.scss';
import SignIn from './signIn/SignIn';

function Private() {
  return (
    <>
      <div className={styles['container']}>
        <Link to="/signIn">
          <i
            className="bi bi-person-circle"
            style={{
              fontSize: '20px',
              marginRight: '10px',
            }}
          ></i>
          <span>Sign in</span>
        </Link>
      </div>
      <Routes>
        <Route path="/signIn" element={<SignIn />}></Route>
      </Routes>
    </>
  );
}

export default Private;
