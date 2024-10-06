import { Outlet, Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
export default function ProtectedRoute() {
  const token = localStorage.getItem("token");

  // Function to check if the token is still valid
  const isTokenValid = (token) => {
    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Get current time in seconds
      return decodedToken.exp > currentTime; // Check if the token has expired
    } catch (error) {
      return false; // If token is invalid or can't be decoded, return false
    }
  };

  if (!isTokenValid(token)) {
    // Token has expired or is invalid, so log out the user and remove the token
    localStorage.removeItem("token");
    localStorage.removeItem("IsAdmin");
    window.location.href = "/login";
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
