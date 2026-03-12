// Get user role from localStorage
export const getUserRole = () => {
  return localStorage.getItem("role");
};

// Logout function
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};