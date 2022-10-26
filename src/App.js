import { useContext } from 'react';
import './App.css';
import Main from './layouts/Main';
import HomePage from './components/HomePage';
import { AuthContext } from './contexts/auth.context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from './components/Courses';
import FAQ from './components/FAQ';
import Blog from './components/Blog';

function App() {
  const authTest = useContext(AuthContext);
  console.log(authTest);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/home",
          element: <HomePage/>
        },
        {
          path: "/courses",
          element: <Courses/>
        },
        {
          path: "/faq",
          element: <FAQ/>
        },
        {
          path: "/blog",
          element: <Blog/>
        }
      ]
    },
    {
      path: "*",
      element: <div>Not found</div>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
