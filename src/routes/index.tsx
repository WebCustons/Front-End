import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/index"
import Login from "../pages/Login/index"
import Register from "../pages/Register/index"
import { Products } from "../pages/Products"
import RecoverPassword from "../pages/RecoverPassword"
import { ProfilePages } from "../pages/ProfilePages"

function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<ProfilePages />} />
      <Route path="/product/:id" element={<Products />} />
      <Route path="/recoverPassword/:token" element={<RecoverPassword />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RoutePages
