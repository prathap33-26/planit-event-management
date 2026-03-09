import './Dashboard.css';


const ClientDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Client Dashboard</h1>
      <p className="dashboard-welcome">Welcome, Valued Client!</p>
      
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">My Projects</h3>
          <p className="dashboard-card-text">View status of your ongoing projects</p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Service Requests</h3>
          <p className="dashboard-card-text">Submit and track service requests</p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Invoices</h3>
          <p className="dashboard-card-text">View and manage your invoices</p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-card-title">Support</h3>
          <p className="dashboard-card-text">Contact support for assistance</p>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;

