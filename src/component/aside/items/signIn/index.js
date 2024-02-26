import styles from './signIn.module.scss';

function SignIn() {
  return (
    <>
      <p>Sign in to like videos, comment, and subscribe</p>
      <div className={styles['container']}>
        <i
          className="bi bi-person-circle"
          style={{
            fontSize: '20px',
            marginRight: '10px',
          }}
        ></i>
        <span>Sign in</span>
      </div>
    </>
  );
}

export default SignIn;
