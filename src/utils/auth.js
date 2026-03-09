/**
 * Authentication utility functions
 * Handles token and role storage in localStorage
 */

// Keys for localStorage
const TOKEN_KEY = 'auth_token';
const ROLE_KEY = 'user_role';

/**
 * Check if user is authenticated
 * @returns {boolean} True if user has a valid token
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  return !!token;
};

/**
 * Get the stored authentication token
 * @returns {string|null} The auth token or null if not authenticated
 */
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

/**
 * Get the current user's role
 * @returns {string|null} The user role or null if not set
 */
export const getUserRole = () => {
  return localStorage.getItem(ROLE_KEY);
};

/**
 * Login function - stores authentication data
 * @param {string} token - Authentication token
 * @param {string} role - User role (Planner, Staff, or Client)
 */
export const login = (token, role) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(ROLE_KEY, role);
};

/**
 * Logout function - clears authentication data
 */
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ROLE_KEY);
};

export default {
  isAuthenticated,
  getToken,
  getUserRole,
  login,
  logout,
};

