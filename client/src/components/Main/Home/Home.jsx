import React, { useState, useEffect } from "react";
import axios from 'axios';

const Home = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

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

  useEffect(() => {
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailValidation.test(email) && email.length > 0) {
      setEmailMessage("Email must have a valid format");
    } else {
      setEmailMessage("");
    }
  }, [email])

  useEffect(() => {
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{9,}$/
    if (!passwordValidation.test(password) && password.length > 0) {
      setPasswordMessage("Password must contain lowecase, uppercase, digit and special character");
    } else {
      setPasswordMessage("");
    }
  }, [password])

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleRole = (e) => setRole(e.target.value);

  const handleSignUp = async () => {
    try {
      console.log("ROLE SENDING", role);
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
    <input type="email" placeholder="email" onChange={handleEmail} />
    {emailMessage ? <span>{emailMessage}</span> : ""}
    <input type="password" placeholder="password" onChange={handlePassword} />
    {passwordMessage ? <span>{passwordMessage}</span> : ""}
    <select value={role} onChange={handleRole} >
      <option value="client">Client</option>
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
