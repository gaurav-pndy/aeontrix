import React, { useEffect } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";
import UnsubscribePage from "./pages/UnsubscribePage";
import ConfirmToken from "./pages/ConfirmToken";
import NewsletterConfirm from "./pages/NewsletterConfirm";
import PrivacyPolicy from "./pages/PriPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsOfService from "./pages/TermsOfService";
import BlogsPage from "./pages/BlogsPage";
import BlogDetails from "./pages/BlogDetails";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";

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
          path: "/blogs",
          element: <BlogsPage />,
        },
        {
          path: "/blogs/:blogId",
          element: <BlogDetails />,
        },
        {
          path: "/unsubscribe",
          element: <UnsubscribePage />,
        },
        {
          path: "/newsletter/confirm",
          element: <ConfirmToken />,
        },
        {
          path: "/newsletter/confirm-newsletter",
          element: <NewsletterConfirm />,
        },
        {
          path: "/solutions/:solutionId",
          element: <Solutions />,
        },
        {
          path: "/industries/:industryId",
          element: <Industries />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/refund-policy",
          element: <RefundPolicy />,
        },
        {
          path: "/terms-of-service",
          element: <TermsOfService />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
