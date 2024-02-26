import { Link } from 'react-router-dom';
import Item from '../index.js';

function Home() {
  return (
    <>
      <Link to="/">
        <Item content="Home" logo={<i className="bi bi-house-door-fill"></i>} />
      </Link>
      <Item
        content="Shorts"
        logo={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
          >
            <path d="m17.77 10.32-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"></path>
          </svg>
        }
      />
      <Link to="/Subscriptions">
        <Item
          content="Subscriptions"
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enablBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
            >
              <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
            </svg>
          }
        />
      </Link>
    </>
  );
}

export default Home;
