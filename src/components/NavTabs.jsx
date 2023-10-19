import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <div className='d-flex justify-content-around'>
        <h1>Daniel</h1>
        <ul className="nav">
          {currentPage === '/' ? null : (
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          )}
          <li className="nav-item">
            <Link to="/About" className={currentPage === '/About' ? 'nav-link active' : 'nav-link disable'}>
              About me
            </Link>
          </li>
          <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link disable'}>
            Portfolio
          </Link>
        </ul>
      </div>
    </>
  )
}

export default NavTabs;
