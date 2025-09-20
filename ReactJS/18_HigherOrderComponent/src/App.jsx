import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";

const RegisterWithAuthLayout = AuthLayout(Register);
const LoginWithAuthLayout = AuthLayout(Login);
const HomeWithDashboardLayout = DashboardLayout(Home);
const AboutWithDashboardLayout = DashboardLayout(About);


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeWithDashboardLayout title="Home Page"/>} />
        <Route path="/about" element={<AboutWithDashboardLayout day="saturday" month="September"/>} />
        <Route path="/login" element={<LoginWithAuthLayout />} />
        <Route path="/register" element={<RegisterWithAuthLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
