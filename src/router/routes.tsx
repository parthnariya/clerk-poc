import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import RootLayout from "../layouts/RootLayout";
import ContactsPage from "../pages/ContactsPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        element: <DashboardLayout />,
        // path: "dashboard",
        children: [
          { path: "/profile", element: <ProfilePage /> },
          { path: "/dashboard", element: <DashboardPage /> },
          { path: "/dashboard/contacts", element: <ContactsPage /> }
        ]
      }
    ]
  }
]);
export default router;
