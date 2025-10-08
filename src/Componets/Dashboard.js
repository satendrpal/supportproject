import React from "react";
import Header from "../layouts/header";
import Sidebar from "../layouts/sidebar";
import "../style/globle.css";

function Dashboard() {
    return (
        <div className="app-layout">
            <Header />
            <div className="app-body">
                <Sidebar />
                <div className="main-panel">
                    <div class="page-header">
                        <ul class="breadcrumbs">
                            <li class="nav-item">
                                <a href="">Home</a>
                            </li>
                            <li class="separator">
                                <i class="icon-arrow-right"></i>
                            </li>
                            <li class="nav-item">
                            Dashboard
                            </li>
                        </ul>
                    </div>
                    <h1>Dashboard</h1>
                </div>
            </div>
        </div>
    );
}
export default Dashboard