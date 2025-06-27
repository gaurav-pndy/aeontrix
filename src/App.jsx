import React, { useEffect, useRef, useState } from "react";
import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import UnsubscribePage from "./pages/UnsubscribePage";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/unsubscribe",
          element: <UnsubscribePage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
