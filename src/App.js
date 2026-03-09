import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import EventList from "./pages/planner/EventList";
import CreateEvent from "./pages/planner/CreateEvent";
import UpdateEvent from "./pages/planner/UpdateEvent";

import ClientEventList from "./pages/client/EventList";
import EventDetails from "./pages/client/EventDetails";

function App() {
  return (
    <div className="app">

      <div className="background-container" aria-hidden="true">
        <div className="background-overlay"></div>
      </div>

      <Navbar />

      <main className="main-content">

        <Routes>

          {/* Planner Routes */}
          <Route path="/" element={<EventList />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/edit-event/:id" element={<UpdateEvent />} />

          {/* Client Routes */}
          <Route path="/client/events" element={<ClientEventList />} />
          <Route path="/client/event/:id" element={<EventDetails />} />

          {/* Default Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>

      </main>

    </div>
  );
}

export default App;
