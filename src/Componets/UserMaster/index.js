import React from "react";
import Header from "../../layouts/header";
import Sidebar from "../../layouts/sidebar";
import "../../style/globle.css";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { validateForm } from "../utils/validation";
function Index() {
    const navigate = useNavigate();
    const [tabledata ,settabledata] = useState([]);
     const [errors, setErrors] = useState({});
    const columns = [
        { title: "Name", field: "name" },
        { title: "Email", field: "email" },
        { title: "Phone", field: "phone" },
      
      ];
    
      // Table data
      const tableData = [
        { name: "Satendra", email: "satendra@example.com", phone: "9876543210", id:'1'},
        { name: "Rahul", email: "rahul@example.com", phone: "9123456789" ,id:'2'},
        { name: "Amit", email: "amit@example.com", phone: "9988776655",id:'3' },
      ];
    
        function Addbutton (){
            navigate('/user-master/create')
        }

        function reset(){

        }
        function SearchButton(){

        }

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
                        {/* <li class="btn-save">
              <button class="search_btn btn" type="submit" onclick="getsubmit()">Submit</button>
              <a href="">
                <button class="btn btn-danger" type="button">Back</button>
              </a>
            </li> */}
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="form-row">
                                <div className="form-group">
                                    <label className="cinput_lable">Name</label>
                                    <input className="cinput_field" name="name" type="text" />
                                </div>
                                {errors.name && <p className="error-text">{errors.name}</p>}
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
                            <div className="form-row form-actions">
                                <button className="search_btn btn" onClick={SearchButton} type="submit">
                                    Search
                                </button>
                                <button className="btn-danger" onClick={reset} type="reset">
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="addbutton">
                            <button class="btn add-btn" onClick={Addbutton} type="button">Add</button>
                            </div>
                            {/* <a href="/user-master/create"> */}
                                {/* <button type="button">Add</button> */}
                               
                            {/* </a> */}
                            <table className="globle-table">
                                <thead>
                                    <tr>
                                        {columns.map((col, index) => (
                                            <th key={index}>{col.title}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {columns.map((col, colIndex) => (
                                                <td key={colIndex}>{row[col.field]}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
