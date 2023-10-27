
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

//gets app and all pages
import App from './App.jsx';
import About from './pages/About';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        // default page
        index:true,
        element: <About />,
      },
      {
        // paths for portfolio
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        // path to contact page
        path: '/Contact',
        element: <Contact />,
      },
      {
        //path to resume
        path: '/Resume',
        element: <Resume />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
