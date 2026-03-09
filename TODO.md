# Route Protection and Role-Based Access Module - Plan

## Task Analysis
Create a React module for protected routes with role-based access control (RBAC) for three roles: Planner, Staff, and Client.

## Information Gathered
- Need to implement authentication checking
- Need role-based routing with 3 roles: Planner, Staff, Client
- Need redirect logic for unauthenticated and unauthorized users
- Need logout functionality
- Use React Router for routing

## Plan

### Step 1: Create utils/auth.js
- `isAuthenticated()` - Check if user is logged in
- `getUserRole()` - Get current user role
- `login(token, role)` - Store auth data in localStorage
- `logout()` - Clear auth data and redirect to login
- `getToken()` - Get stored token

### Step 2: Create routes/ProtectedRoute.jsx
- Higher-order component that checks authentication
- Validates user role against allowed roles
- Redirects to login if not authenticated
- Redirects to unauthorized/home if wrong role
- Renders children or Outlet if authorized

### Step 3: Create components/Navbar.jsx
- Display navigation links based on user role
- Show Planner, Staff, Client dashboard links conditionally
- Include logout button that calls auth.logout()

### Step 4: Create App.jsx (main routing)
- Setup React Router with routes
- Wrap protected routes with ProtectedRoute component
- Create login page, dashboards, and unauthorized page

## Files to Create
1. `utils/auth.js` - Authentication utility functions
2. `routes/ProtectedRoute.jsx` - Protected route component
3. `components/Navbar.jsx` - Navigation component
4. `App.jsx` - Main app with routing setup
5. `pages/Login.jsx` - Login page
6. `pages/PlannerDashboard.jsx` - Planner dashboard
7. `pages/StaffDashboard.jsx` - Staff dashboard
8. `pages/ClientDashboard.jsx` - Client dashboard
9. `pages/Unauthorized.jsx` - Unauthorized access page

## Follow-up Steps
- ✅ Install react-router-dom package - Completed
- ✅ Test the implementation - Development server running on http://localhost:3000/

