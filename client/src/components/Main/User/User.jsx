import React, { useState, useEffect } from "react";
import axios from "axios";

const User = () => {

  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUserResources = async () => {
      try {
        const request = await axios({
          method: 'get',
          url: '/api/resources/protectedresource',
          withCredentials: true,
        });
        console.log("****", request.data);
        setMessage(request.data.msg);
      } catch (error) {
        console.log(error.message)
      }
    }
    getUserResources();

  }, [])

  return <div>
    <h1>User</h1>

    {message ? <h3>{message}</h3> : ""}

  </div>;
};

export default User;
