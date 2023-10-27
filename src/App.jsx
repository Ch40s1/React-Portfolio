import { Outlet } from 'react-router-dom';
import NavTabs from "./components/NavTabs";
import Footer from './components/Footer';
import "./style/imports.css"

function App(){
  return (
    <>
    {/* gets all the components that are needed for the page and puts in one compact app  */}
    <body className='min-vh-90'>
      <NavTabs />
      <main className="mx-4">
        <Outlet />
      </main>
    </body>
    <footer className='col-12 mt-5 d-flex justify-content-center'>
      <Footer />
    </footer>
    </>
  )
}

export default App;
