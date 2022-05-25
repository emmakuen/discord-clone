import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AlertNotification } from "./components";
import { RegisterPage, LoginPage, Dashboard, NotFound } from "./pages";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate replace to="/dashboard" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <AlertNotification />
    </>
  );
}

export default App;
