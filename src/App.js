import './App.css';
import Main from './layouts/Main';
import HomePage from './components/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Courses from './components/Courses';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './routes/PrivateRoute';
import CourseDetails from './components/CourseDetails';
import CheckOut from './components/CheckOut';
import NotFound from './components/NotFound';

function App() {

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
          loader: async () => fetch('https://iotacademy-server.vercel.app/courses/'),
          element: <Courses/>
        },
        {
          path: "/course-details/:id",
          loader: async ({params}) =>{
            return fetch(`https://iotacademy-server.vercel.app/courses/${params.id}`);
          },
          element: <CourseDetails/>
        },
        {
          path: "/checkout/:id",
          loader: async ({params}) =>{
            return fetch(`https://iotacademy-server.vercel.app/courses/${params.id}`);
          },
          element: <PrivateRoute><CheckOut/></PrivateRoute>
        },
        {
          path: "/faq",
          element: <FAQ/>
        },
        {
          path: "/blog",
          element: <Blog/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        }
      ]
    },
    {
      path: "*",
      element: <NotFound/>
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
