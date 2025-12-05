import React from "react";
import CalendarView from "./components/CalenderView";
import "./styles.css";

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-title">
          <img
            src="/calengraphx.png"
            alt="CalenGraphX Logo"
            className="app-logo"
          />
          <h1 className="app-title">CalenGraphX</h1>
        </div>
      </header>
      <div className="calendar-card">
        <CalendarView />
      </div>
    </div>
  );
}
