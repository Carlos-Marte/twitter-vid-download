import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/HomePage/Home';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import DownloadPage from '@/pages/DownloadPage/DownloadPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: 'download/:id',
    element: <DownloadPage />
  }
]);
