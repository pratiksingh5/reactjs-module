import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./pages/NotFound";

const RegisterWithAuthLayout = AuthLayout(Register);
const LoginWithAuthLayout = AuthLayout(Login);
const HomeWithDashboardLayout = DashboardLayout(Home);
const AboutWithDashboardLayout = DashboardLayout(About);

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<HomeWithDashboardLayout title="Home Page"/>} />
//         <Route path="/about" element={<AboutWithDashboardLayout day="saturday" month="September"/>} />
//         <Route path="/login" element={<AuthLayout > <Login/> </AuthLayout>} />
//         <Route path="/register" element={<AuthLayout><Register/></AuthLayout>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomeWithDashboardLayout/>,
//   },
//     {
//     path: '/about',
//     element: <AboutWithDashboardLayout/>,
//   },
//     {
//     path: '/login',
//     element: <LoginWithAuthLayout/>,
//   },
//     {
//     path: '/register',
//     element: <RegisterWithAuthLayout/>,
//   }
// ])

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
