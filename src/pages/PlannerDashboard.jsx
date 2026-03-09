import './PlannerDashboard.css';


const PlannerDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Planner Dashboard</h1>
      <p className="dashboard-welcome">Welcome, Planner!</p>
      
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Planning Overview</h3>
          <p className="dashboard-card-text">View and manage all planning activities</p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Resource Allocation</h3>
          <p className="dashboard-card-text">Allocate resources for upcoming projects</p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Schedule Management</h3>
          <p className="dashboard-card-text">Manage schedules and timelines</p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Reports</h3>
          <p className="dashboard-card-text">Generate and view planning reports</p>
        </div>
      </div>
    </div>
  );
};

export default PlannerDashboard;

