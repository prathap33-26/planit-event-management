import './Dashboard.css';


const StaffDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Staff Dashboard</h1>
      <p className="dashboard-welcome">Welcome, Staff Member!</p>
      
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Task Management</h3>
          <p className="dashboard-card-text">View and update your assigned tasks</p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Attendance</h3>
          <p className="dashboard-card-text">Track your attendance and schedule</p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Performance</h3>
          <p className="dashboard-card-text">View your performance metrics</p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Announcements</h3>
          <p className="dashboard-card-text">Check latest updates and notices</p>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;

