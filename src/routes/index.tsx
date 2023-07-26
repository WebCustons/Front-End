import { Navigate, Route, Routes } from "react-router-dom";
import Home from '../pages/Home/index';
import Login from '../pages/Login/index';
import Register from '../pages/Register/index';
import Profile from '../pages/Profile/index';
import Adverts from '../pages/Adverts/index';

function RoutePages() {
    return (
        <Routes>
            <Route path="/" element={<Home/> } />
            <Route path="/login" element={<Login /> } />
            <Route path="/register" element={<Register/> } />
            <Route path="/profile" element={<Profile/> } />
            <Route path="/profile" element={<Adverts /> } />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default RoutePages