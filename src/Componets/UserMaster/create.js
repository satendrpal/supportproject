import React from "react";
import Header from "../../layouts/header";
import Sidebar from "../../layouts/sidebar";
import "../../style/globle.css";

function Index() {
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
                Create
              </li>
            </ul>
            <li class="btn-save">
              <button class="search_btn btn" type="submit" onclick="getsubmit()">Submit</button>
              <a href="/user-master">
                <button class="btn btn-danger" type="button">Back</button>
              </a>
            </li>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="form-row">
                <div className="form-group">
                  <label className="cinput_lable">Name</label>
                  <input className="cinput_field" type="text" />
                </div>

                <div className="form-group">
                  <label className="cinput_lable">Email</label>
                  <input className="cinput_field" type="email" />
                </div>

                <div className="form-group">
                  <label className="cinput_lable">Phone</label>
                  <input className="cinput_field" type="text" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="cinput_lable">Address</label>
                  <input className="cinput_field" type="text" />
                </div>

                <div className="form-group">
                  <label className="cinput_lable">City</label>
                  <input className="cinput_field" type="text" />
                </div>

                <div className="form-group">
                  <label className="cinput_lable">Country</label>
                  <input className="cinput_field" type="text" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
