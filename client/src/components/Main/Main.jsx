import React, { useState } from "react";
import Home from './Home';
import Admin from './Admin';
import User from './User';
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../../utils/ProtectedRoutes";

const Main = () => {

  const [logged, setLogged] = useState(false);

  return <main className="main">
    <Routes>
      <Route element={<Home logged={{ logged, setLogged }} />} path="/" />
      <Route>
        <Route path="/admin" element={<ProtectedRoutes component={<Admin />} logged={logged} />} />
        <Route path="/user" element={<ProtectedRoutes component={<User />} logged={logged} />} />


      </Route>
      {/* <Route element={<ProtectedRoutes logged={logged} />} >
        <Route element={<Admin />} path="/admin" exact />
        <Route element={<User />} path="/user" exact/>
      </Route> */}
    </Routes>

  </main>;
};

export default Main;
