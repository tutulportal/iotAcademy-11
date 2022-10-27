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
          loader: async () => fetch('http://localhost:5000/courses'),
          element: <Courses/>
        },
        {
          path: "/course-details/:id",
          loader: async ({params}) =>{
            return fetch(`http://localhost:5000/courses/${params.id}`);
          },
          element: <CourseDetails/>
        },
        {
          path: "/checkout/:id",
          loader: async ({params}) =>{
            return fetch(`http://localhost:5000/courses/${params.id}`);
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
