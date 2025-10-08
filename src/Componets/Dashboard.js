import React from "react";
import Header from "../layouts/header";
import Sidebar from "../layouts/sidebar";

function Dashboard(){
return(
    <div className="app-layout">
            <Header />
              <div className="app-body">
                <Sidebar />
                <div className="main-panel"></div>
               <h1>Dashboard</h1>
</div>
</div>
);
}
export default Dashboard