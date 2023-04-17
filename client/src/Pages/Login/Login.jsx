import { Button, Checkbox } from "@mui/material";
import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_STATE" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login h-[100vh] w-full flex items-center justify-center bg-gradient-to-br from-blue-800 to-sky-500">
      <div className="Lcontainer w-96  flex flex-col items-center p-4">
        <h2 className="text-white text-3xl font-semibold mb-14">LOGIN</h2>
        <div className="flex flex-col w-full gap-4 mb-3">
          <input
            type="text"
            placeholder="User Name"
            id="username"
            className="px-4 py-1 w-full h-9 rounded font-semibold outline-none"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="px-4 py-1 w-full h-9 rounded font-semibold outline-none"
            onChange={handleChange}
          />
        </div>
        <div className="text-right w-full mb-7">
          <p className="inline-block text-white cursor-pointer hover:text-blue-200">
            Register
          </p>
        </div>
        <Button
          disabled={loading}
          className="w-2/3"
          variant="contained"
          onClick={handleClick}
        >
          login
        </Button>
      </div>
      {error && <span>{error.message}</span>}
    </div>
  );
};

export default Login;
