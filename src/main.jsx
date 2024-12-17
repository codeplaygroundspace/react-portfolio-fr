import '@/index.css';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

import ErrorBoundary from '@/components/ErrorBoundary';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/routes/Home';
import Notfound from '@/routes/Notfound';
import SecretRooms from '@/routes/SecretRooms';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/secret',
        element: <SecretRooms />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
  {
    path: '*',
    element: <Notfound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </StrictMode>
);
