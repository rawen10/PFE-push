import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import App from "./App";
import Profile from "./Component/Profile";
import About from "./Component/About";
import SignUp from "./Component/SignUp";
import LogIn from "./Component/LogIn";
import Train from "./Component/Train";
import Settings from "./Component/Settings";
import axios from "axios";
import UserList from "./Component/UserList";
import MyProfile from "./Component/Myprofile";
import EditUserForm from "./Component/EditUserForm";
import Downoald from "./Component/Downoald";

function Main() {
  const [user, setUser] = useState(null);

  // const handleLogin = () => {
  //   setUser(true); // Simulate login by setting user to true
  // };

  useEffect(() => {
    const validateToken = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (localStorage.getItem("token")) {
        try {
          const response = await axios.get("http://localhost:3000/auth/getme", {
            headers: { Authorization: `Bearer ${token}` },
          });

          if (!response.error) {
            setUser(response.data);
          }
        } catch (error) {
          console.error("Token validation failed:", error);
        }
      }
    };

    validateToken(); // Valider le token au chargement
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<App user={user} />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile user={user} />} />
            <Route path="about" element={<About />} />
            <Route path="train" element={<Train />} />
            <Route path="downoald" element={<Downoald />} />

            <Route path="editProfile" element={<MyProfile />} />
            <Route path="users" element={<UserList/>} />
            <Route path="edit/:id" element={<EditUserForm user={user}/>} />





          </Route>
        ) : (
          <>
            <Route path="/" element={<LogIn />} />
            <Route path="signUp" element={<SignUp />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
