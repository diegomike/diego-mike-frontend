import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/SignUp";
import Home from "./Pages/Home";
import Friends from "./Pages/Friends";
import ProfilePage from "./Pages/ProfilePage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/profile",
    element: <ProfilePage />
  },
  {
    path: "/friends",
    element: <Friends />
  }
  ]);

function App() {

  return <RouterProvider router={router} />;
}

export default App