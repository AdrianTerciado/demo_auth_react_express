import React from "react";
import { Outlet } from 'react-router-dom';


const ProtectedRoutes = ({ component, logged }) => {

    return (
        logged ? component : <Outlet />
    )


};

export default ProtectedRoutes;