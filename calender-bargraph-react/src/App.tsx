import React from "react";
import CalendarView from "./components/CalenderView";

export default function App() {
  return (
    <div style={{ padding: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="/calengraphx.png"
          alt="CalenGraphX Logo"
          style={{ width: 80, height: 80 }}
        />
        <h1><u>CalenGraphX</u></h1>
      </div>

      <CalendarView />
    </div>
  );
}
