import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './utils/auth';
import ProtectedRoute from './routes/ProtectedRoute';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/home';
import PlannerDashboard from './pages/PlannerDashboard';
import StaffDashboard from './pages/StaffDashboard';
import ClientDashboard from './pages/ClientDashboard';
import Unauthorized from './pages/Unauthorized';
import './pages/Home.css';



const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        
        <Route 
          path="/" 
          element={
            isAuthenticated() ? <Navigate to="/Planner-dashboard" replace /> : <Home />
          } 
        />

        
        <Route element={<ProtectedRoute allowedRoles={['Planner']}><AppLayout /></ProtectedRoute>}>
          <Route path="/Planner-dashboard" element={<PlannerDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['Staff']}><AppLayout /></ProtectedRoute>}>
          <Route path="/staff-dashboard" element={<StaffDashboard />} />
        </Route>

      
        <Route element={<ProtectedRoute allowedRoles={['Client']}><AppLayout /></ProtectedRoute>}>
          <Route path="/client-dashboard" element={<ClientDashboard />} />
        </Route>

        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;

