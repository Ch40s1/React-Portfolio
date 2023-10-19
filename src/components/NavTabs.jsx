import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link disable'}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className={currentPage === '/About' ? 'nav-link active' : 'nav-link disable'}>
            About me
          </Link>
        </li>
        <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link disable'}>
          Portfolio
        </Link>
      </ul>
    </>
  )
}

export default NavTabs;
