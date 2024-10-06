import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import About from "./Pages/About.jsx";
import JoinUs from "./Pages/JoinUs.jsx";
import Admin from "./Pages/Admin.jsx";
import UserCard from "./Pages/UserCard.jsx";
import SignUp from "./Pages/SignUp.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import ProtectedRoute2 from "./utils/ProtectedRoute2.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/join" element={<JoinUs />} />

        <Route element={<ProtectedRoute2 />}>
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/user" element={<UserCard />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
