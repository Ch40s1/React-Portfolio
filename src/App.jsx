import { Outlet } from 'react-router-dom';
import NavTabs from "./components/NavTabs";

function App(){
  return (
    <>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  )
}

export default App;
