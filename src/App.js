import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Home from "./components/Home";
import EventList from "./pages/client/EventList";
import EventDetails from "./pages/client/EventDetails";

import PlannerDashboard from "./pages/planner/PlannerDashboard";
import CreateEvent from "./pages/planner/CreateEvent";
import PlannerEventList from "./pages/planner/ViewEvents";
import CreateTask from "./pages/planner/CreateTask";
import TaskList from "./pages/planner/TaskList";

import StaffDashboard from "./pages/staff/StaffDashboard";

function Layout() {
  const location = useLocation();

  const hideNavbarOn = ["/login", "/register"];
  const showNavbar = !hideNavbarOn.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/"         element={<Home />} />
        <Route path="/login"    element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED CLIENT ROUTES */}
        <Route path="/events" element={
          <ProtectedRoute><EventList /></ProtectedRoute>
        } />
        <Route path="/events/:id" element={
          <ProtectedRoute><EventDetails /></ProtectedRoute>
        } />

        {/* PROTECTED PLANNER ROUTES */}
        <Route path="/planner" element={
          <ProtectedRoute><PlannerDashboard /></ProtectedRoute>
        } />
        <Route path="/planner/create-event" element={
          <ProtectedRoute><CreateEvent /></ProtectedRoute>
        } />
        <Route path="/planner/events" element={
          <ProtectedRoute><PlannerEventList /></ProtectedRoute>
        } />
        <Route path="/planner/create-task" element={
          <ProtectedRoute><CreateTask /></ProtectedRoute>
        } />
        <Route path="/planner/tasks" element={
          <ProtectedRoute><TaskList /></ProtectedRoute>
        } />

        {/* PROTECTED STAFF ROUTES */}
        <Route path="/staff" element={
          <ProtectedRoute><StaffDashboard /></ProtectedRoute>
        } />
        {/* ✅ Removed /staff/tasks — not needed anymore */}

      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;