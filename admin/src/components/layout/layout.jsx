import React from "react";
import { Outlet } from "react-router-dom"; // renders nested routes
import "./Layout.css"; // CSS for layout styling
import Sidebar from "./Sidebar"; // adjust path if needed

const Layout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <Outlet /> {/* renders Add, List, Orders pages here */}
            </div>
        </div>
    );
};

export default Layout;
