import { Link, useLocation } from 'react-router-dom';

const styles = {
  navBarStyle : {
    boxShadow: '0 0 10px rgba(0,0,0,.30)',
  },

}

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <div className='d-flex justify-content-around pt-3
      pb-2' style={styles.navBarStyle}>
        <h1>Daniel</h1>
        <ul className="nav">
          {currentPage === '/' ? null :(
            <li className="nav-item">
              <Link to="/" className="nav-link">
                About me
              </Link>
            </li>
          )}
          <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link disable'}>
            Portfolio
          </Link>
          <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link disable'}>
            Contact
          </Link>
          <Link to="/Resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link disable'}>
            Resume
          </Link>
        </ul>
      </div>
    </>
  )
}

export default NavTabs;
