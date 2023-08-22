import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home/index"
import Login from "../pages/Login/index"
import Register from "../pages/Register/index"
import Products from "../pages/Products"
import { ProfilePages } from "../pages/ProfilePages"

function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<ProfilePages />} />
      <Route path="/product" element={<Products />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RoutePages
