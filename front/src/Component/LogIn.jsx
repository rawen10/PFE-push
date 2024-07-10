import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogIn({ setToken }) {
  //accept  the callback as a prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email,
        password,
      });
      // Store the JWT token (in local storage or cookies)
      localStorage.setItem("token", JSON.stringify(response?.data));
      window.location.reload();
      // Call the callback on successful login
    } catch (error) {
      // Check if there's a response with an error message
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      // Show a toast notification with the specific error message
      toast.error(errorMessage);
    }
  };

  return (
    <div
      style={{
        paddingTop: 150,
        height: "100vh",
        justifyContent: "center",
        display: "flex",
        background: "black",
      }}
      className="App"
    >
      <div className="ring">
        <i style={{ "--clr": "#DA0083" }}></i>
        <i style={{ "--clr": "#3B1C78" }}></i>
        <i style={{ "--clr": "#F9F871" }}></i>
        <div className="login">
          <h2
            style={{
              background:
                "linear-gradient(to right, #FF3BFF 0%, #ECBFBF 38%, #5C24FF 76%, #D94FD5 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontFamily: "Inter var, sans-serif",
              fontWeight: "400",
              fontSize: 50,
              marginBottom: 20, // Add margin bottom to create space between h1 and h2
            }}
          >
            Login
          </h2>

          <div className="inputBx">
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="inputBx">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="inputBx">
            <input type="submit" value="Sign in" onClick={handleLogin} />
          </div>

          <div className="links">
            <a href="#">Forget Password</a>
            <a href="signUp">Signup</a>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default LogIn;
