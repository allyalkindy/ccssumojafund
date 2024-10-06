import { Outlet, Navigate } from "react-router-dom";
export default function ProtectedRoute2() {

     const isAdmin = localStorage.getItem("IsAdmin") === "true";

  return isAdmin ? <Outlet /> : <Navigate to="/" />;
}
