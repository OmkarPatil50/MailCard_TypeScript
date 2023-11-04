import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Spam from "./pages/Spam";
import Trash from "./pages/Trash";
import MailDetail from "./pages/MailDetail";
import React from "react";

export default function App(): JSX.Element {
  const getActiveStyle = ({ isActive }: { isActive: boolean }) => ({
    margin: "1rem 0",
    padding: "1rem",
    fontWeight: isActive ? "600" : "200",
    color: isActive ? "red" : ""
  });

  return (
    <>
      <h1 className="title">tanaypratap's mail box</h1>
      <div className="App">
        <nav>
          <NavLink style={getActiveStyle} to="/">
            Inbox
          </NavLink>
          <NavLink style={getActiveStyle} to="/spam">
            Spam
          </NavLink>
          <NavLink style={getActiveStyle} to="/trash">
            Trash
          </NavLink>
        </nav>
        <div style={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spam" element={<Spam />} />
            <Route path="/mail/:mailId" element={<MailDetail />} />
            <Route path="/trash" element={<Trash />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
