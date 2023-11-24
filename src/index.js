import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import Todo from './Pages/Todo';
import Analytics from './Pages/Analytics';
import Dashboard from './Pages/Dashboard';
import Deposits from './Pages/Deposits';
import Help from './Pages/Help';
import Moneybox from './Pages/Moneybox';
import Payment from './Pages/Payment';
import Secruties from './Pages/Secruties';
import Setting from './Pages/Setting';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/Analytics",
    element: <Analytics />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Deposits",
    element: <Deposits />,
  },
  {
    path: "/Help",
    element: <Help />,
  },
  {
    path: "/Moneybox",
    element: <Moneybox />,
  },
  {
    path: "/Payments",
    element: <Payment />,
  },
  {
    path: "/Securities",
    element: <Secruties />,
  },
  {
    path: "/Setting",
    element: <Setting />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);

