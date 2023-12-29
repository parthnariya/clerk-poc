import { RouterProvider } from "react-router-dom";
import router from "./router/routes";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function App() {
  return <RouterProvider router={router} />;
}
