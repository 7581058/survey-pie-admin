import { createBrowserRouter, Navigate } from 'react-router'

import MainLayout from '../layouts/MainLayout'
import CreatePage from '../pages/CreatePage'
import ListPage from '../pages/ListPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/list" />,
      },
      {
        path: 'list',
        element: <ListPage />,
      },
      {
        path: 'create/:surveyId',
        element: <CreatePage />,
      },
    ],
  },
])
export default router
