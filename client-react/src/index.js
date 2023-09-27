import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "App";
import './index.css';
// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "example",
    element: <div>Example</div>,
  },
  {
    path: "schedule_day",
    element: <Schedule />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
