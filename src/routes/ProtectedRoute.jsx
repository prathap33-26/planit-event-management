import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const role = localStorage.getItem("role");

  // ✅ If not logged in, redirect to login
  if (!role) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;