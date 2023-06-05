import React, { useState, useEffect } from "react";
import axios from 'axios';

const Home = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const testConnection = async () => {
      try {
        const request = await axios({
          method: 'get',
          url: 'api/test',
        })
        console.log(request.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    testConnection();
  }, [])

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleRole = (e) => setRole(e.target.value);

  const handleSignUp = async () => {
    try {
      const request = await axios({
        method: 'post',
        url: 'api/users/signup',
        data: { email, password, role }
      });
      setMessage(request.data.msg);
    } catch (error) {
      console.log(error.message)
    }
  };

  const handleLogin = async () => {
    try {
      const request = await axios({
        method: 'post',
        url: 'api/users/login',
        data: { email, password }
      });
      console.log(request.headers);
      const cookies = request.headers.authorization;
      console.log(cookies);
      axios.defaults.headers.common['Authorization'] = cookies;
      props.logged.setLogged(true);
      props.role.setRole(request.data.role);
      setMessage(`Authorisation Header ${cookies}`);

    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await axios({
        method: 'get',
        url: 'api/users/logout'
      });
      props.logged.setLogged(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const resourceRequest = async () => {
    try {
      const request = await axios({
        method: 'get',
        url: 'api/resources/protectedresource',
        withCredentials: true
      });

      if (request.status === 200) {
        setMessage(request.data.msg);
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        setMessage("Unauthorized");
      }
      if (error.response.status === 403) {
        setMessage("Unauthorized");
      }
    }

  };


  return <div className="home">
    <input type="text" placeholder="email" onChange={handleEmail} />
    <input type="text" placeholder="password" onChange={handlePassword} />
    <select value={role} onChange={handleRole} >
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
    <span>{message}</span>
    <button onClick={handleSignUp}>Sign Up</button>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    <button onClick={resourceRequest}>Protected resource request</button>
  </div>;

};

export default Home;
