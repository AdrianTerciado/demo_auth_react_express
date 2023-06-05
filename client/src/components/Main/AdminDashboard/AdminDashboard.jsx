import React, { useState } from "react";
import axios from 'axios';

const AdminDashboard = () => {

  const [users, setUsers] = useState([]);

  const handleGetUsers = async () => {
    try {
      const request = await axios({
        method: 'get',
        url: '/api/users/all'
      });

      setUsers(request.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClean = () => {
    setUsers([]);
  };


  const printUsers = (users) => {
    return users.map((user, i) => {
      return <ul key={[i]}>
        <li>Email: {user.email}</li>
        <li>Role: {user.role}</li>
        <li>Created: {user.createdAt}</li>
      </ul>
    })
  }

  return <div>
    <h2>Admin Dashboard</h2>

    <button onClick={handleGetUsers}>Get All Users</button>
    <button onClick={handleClean}>Clean</button>

    {printUsers(users)}


  </div>;
};

export default AdminDashboard;
