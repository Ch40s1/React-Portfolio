import { Link, useLocation } from 'react-router-dom';
import '../style/imports.css'

const styles = {
  navBarStyle: {
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.30)',
    fontSize: '1.5rem',
    fontFamily: 'Roboto, sans-serif',
  },
  backgroundStyle: {
    borderRadius: '20px',
    background: 'blue',
    transition: 'background 1.3s ease',
    color: 'white',
  }
}

function NavTabs() {
  // sets what the pages should be in
  const currentPage = useLocation().pathname;
  const isAboutPage = currentPage === '/';
  const isPortfolioPage = currentPage === '/Portfolio';
  const isContactPage = currentPage === '/Contact';
  const isResumePage = currentPage === '/Resume';

  return (
    // the way it works for all links
    // if the current page is equal to the its corresponding page then the link becomes inactive
    // so if the path is in /about then the link for /about is not active
    <div className={`d-flex justify-content-around pt-3 pb-2 flex-wrap`} style={styles.navBarStyle}>
      <h1 className=''>Daniel</h1>
      <ul className="nav">
        <Link to="/" className={`nav-link ${isAboutPage ? 'active' : 'disable'} `} style={isAboutPage ? styles.backgroundStyle : null}>
          About Me
        </Link>
        <Link to="/Portfolio" className={`nav-link ${isPortfolioPage ? 'active' : 'disable'}`} style={isPortfolioPage ? styles.backgroundStyle : null}>
          Portfolio
        </Link>
        <Link to="/Contact" className={`nav-link ${isContactPage ? 'active' : 'disable'}`} style={isContactPage ? styles.backgroundStyle : null}>
          Contact
        </Link>
        <Link to="/Resume" className={`nav-link ${isResumePage ? 'active' : 'disable'}`} style={isResumePage ? styles.backgroundStyle : null}>
          Resume
        </Link>
      </ul>
    </div>
  );
}

export default NavTabs;
