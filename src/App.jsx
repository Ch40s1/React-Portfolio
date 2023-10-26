import { Outlet } from 'react-router-dom';
import NavTabs from "./components/NavTabs";
import Footer from './components/Footer';

const styles = {
  footerBarStyle : {
    position: 'absolute',
    bottom: '-5rem',
    height: '7rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,.30)',
  },

}

function App(){
  return (
    <>
    <body className='min-vh-90'>
      <NavTabs />
      <main className="mx-4">
        <Outlet />
      </main>
    </body>
    <footer style={styles.footerBarStyle} className='col-12 mt-5'>
      <Footer />
    </footer>
    </>
  )
}

export default App;
