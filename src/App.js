import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import PlannerDashboard from "./pages/planner/PlannerDashboard";
import CreateEvent from "./pages/planner/CreateEvent";
import PlannerEventList from "./pages/planner/EventList";
import CreateTask from "./pages/planner/CreateTask";
import TaskList from "./pages/planner/TaskList";

import StaffDashboard from "./pages/staff/StaffDashboard";

import EventList from "./pages/client/EventList";
import EventDetails from "./pages/client/EventDetails";

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<EventList/>}/>
<Route path="/events" element={<EventList />} />

<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>

<Route path="/planner" element={<PlannerDashboard/>}/>
<Route path="/planner/create-event" element={<CreateEvent/>}/>
<Route path="/planner/events" element={<PlannerEventList/>}/>
<Route path="/planner/create-task" element={<CreateTask/>}/>
<Route path="/planner/tasks" element={<TaskList/>}/>

<Route path="/staff" element={<StaffDashboard/>}/>

<Route path="/events" element={<EventList/>}/>
<Route path="/events/:id" element={<EventDetails/>}/>

</Routes>

</BrowserRouter>

)

}

export default App;
