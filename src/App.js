import { useContext } from 'react';
import './App.css';
import Main from './layouts/Main';
import HomePage from './components/HomePage';
import { AuthContext } from './contexts/auth.context';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
