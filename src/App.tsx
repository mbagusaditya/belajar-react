import './App.css';
import PageDashboard from './latihan/pages/PageDashboard';
import ErrorPage from './pages/error';
import SignInPage from './pages/signIn';
import SignUpPage from './pages/signUp';
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

function App() {
  const myRouter = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      element: (
        <div className="flex justify-center items-center min-h-screen">
          <Link to="/login" className="p-2 m-5 bg-primary text-white">
            Login
          </Link>
          |
          <Link to="/register" className="p-2 m-5 bg-primary text-white">
            Register
          </Link>
          |
          <Link to="/latihan" className="p-2 m-5 bg-primary text-white">
            Latihan
          </Link>
        </div>
      ),
    },
    {
      path: '/login',
      element: <SignInPage />,
    },
    {
      path: '/register',
      element: <SignUpPage />,
    },
    {
      path: '/latihan',
      element: <PageDashboard />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
