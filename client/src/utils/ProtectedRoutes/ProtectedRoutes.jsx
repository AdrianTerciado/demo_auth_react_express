import React from "react";



const ProtectedRoutes = ({ component, logged }) => {

    return (
        logged ? component : <div>Please log in first</div>
    )


};

export default ProtectedRoutes;