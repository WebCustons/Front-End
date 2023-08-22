import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/index"
import Login from "../pages/Login/index"
import Register from "../pages/Register/index"
import Products from "../pages/Products"
import ProfileAdmin from "../pages/ProfileAdmin"
import ProfileUser from "../pages/ProfileUser"
import RecoverPassword from '../pages/RecoverPassword';

function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<ProfileAdmin />} />
      <Route path="/profile" element={<ProfileUser />} />
      <Route path="/product" element={<Products />} />
      <Route path="/recoverPassword" element={<RecoverPassword />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RoutePages
