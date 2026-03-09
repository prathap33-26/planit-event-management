import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventList from "./pages/client/EventList";
import EventDetails from "./pages/client/EventDetails";

function App() {
  return (
    <>
    <h1>This is testing </h1>
    <EventDetails/>
    <BrowserRouter>
      <Routes>

        <Route path="/client/events" element={<EventList />} />

        <Route path="/client/event/:id" element={<EventDetails />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;