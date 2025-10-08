import React, { useState } from "react";
import Header from "../../layouts/header";
import Sidebar from "../../layouts/sidebar";
import "../../style/globle.css";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../utils/validation";
import {showSuccessAlert,showErrorAlert} from '../utils/ErrorMessage'

function Index() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  
  });

  const [errors, setErrors] = useState({});

  function btncancel() {
    navigate("/user-master");
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    

    if (Object.keys(newErrors).length === 0) {
      showErrorAlert("Form submitted successfully")
      console.log(formData);
    }
  }

  return (
    <div className="app-layout">
      <Header />

      <div className="app-body">
        <Sidebar />
        <div className="main-panel">
          <div className="page-header">
            <ul className="breadcrumbs">
              <li className="nav-item">
                <a href="">Home</a>
              </li>
              <li className="separator">
                <i className="icon-arrow-right"></i>
              </li>
              <li className="nav-item">Create</li>
            </ul>
            <li className="btn-save">
              <button
                className="search_btn btn"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button className="btn btn-danger" onClick={btncancel}>
                Back
              </button>
            </li>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="form-row">
                <div className="form-group">
                  <label className="cinput_lable">Name</label>
                  <select
                    className={`cinput_field`}
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  >
                    <option value="">--Select--</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                  {errors.name && <p className="error-text">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label className="cinput_lable">Email</label>
                  <input
                    className={`cinput_field ${errors.email ? "error" : ""}`}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label className="cinput_lable">Phone</label>
                  <input
                    className={`cinput_field ${errors.phone ? "error" : ""}`}
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="error-text">{errors.phone}</p>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="cinput_lable">Address</label>
                  <input
                    className={`cinput_field`}
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <p className="error-text">{errors.address}</p>
                  )}
                </div>

                <div className="form-group">
                  <label className="cinput_lable">City</label>
                  <input
                    className={`cinput_field ${errors.city ? "error" : ""}`}
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && <p className="error-text">{errors.city}</p>}
                </div>

                <div className="form-group">
                  <label className="cinput_lable">Country</label>
                  <input
                    className={`cinput_field ${errors.country ? "error" : ""}`}
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  {errors.country && (
                    <p className="error-text">{errors.country}</p>
                  )}
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
