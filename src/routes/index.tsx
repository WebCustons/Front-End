import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import Register from "../pages/Register/index";
import ProfileUser from "../pages/ProfileUser/index";
import Adverts from "../pages/Adverts";
import ProfileAdmin from "../pages/ProfileAdmin";

function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<ProfileAdmin />} />
      <Route path="/profile" element={<ProfileUser />} />
      <Route path="/adverts" element={<Adverts />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutePages;
