import { Navigate, useRoutes } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import DashboardLayout from '../layouts/dashboard';
import SimpleLayout from '../layouts/simple';
import LoginPage from '../pages/auth/LoginPage';
import RegistrationPage from '../pages/auth/RegistrationPage';
import Page404 from '../pages/not-found/Page404';
import { admin } from './admin';
import { farmer } from './farmer';
import { supplier } from './supplier';
import AboutPage from '../pages/about/AboutPage';

export default function Router() {
  const children = () => {
    return admin;
  };

  const routes = useRoutes([
    {
      // path: '/',
      element: <DashboardLayout />,
      children: children(),
      // { element: <Navigate to="/dashboard/app" />, index: true },
      // { path: 'app', element: <Dashboard /> },
      // { path: 'user', element: <UserPage /> },
      // { path: 'products', element: <ProductsPage /> },
      // { path: 'blog', element: <BlogPage /> },
    },
    {
      path: '/',
      element: <Navigate to="home" />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegistrationPage />,
    },
    {
      path: 'home',
      element: <HomePage />,
    },
    {
      path: 'about',
      element: <AboutPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
