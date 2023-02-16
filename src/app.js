import "react-calendar/dist/Calendar.css";
import "./App.css";
// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import CalendarApp from "./Pages/CalendarApp";

// COMPONENTS
import HeaderBar from "./components/HeaderBar";
import React from "react";

// const App = () =>
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderBar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Index />} />
            <Route path="/services/new" element={<New />} />
            <Route path="/services/:id" element={<Show />} />
            {/* <Route path="/services/:id/edit" element={<Edit />} /> */}
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
