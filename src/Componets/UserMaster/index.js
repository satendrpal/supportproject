import React, { useState } from "react";
import Header from "../../layouts/header";
import Sidebar from "../../layouts/sidebar";
import "../../style/globle.css";
<<<<<<< HEAD
import DynamicTableInput from "../../contex/DynamicTableInput";
import { ModalProvider } from "../../contex/ModalContext";

function Index() {
  const columns = [
    { title: "Name", field: "first_name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
  ];

  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [email, setEmail] = useState("");
  const [first_name, setfirst_name] = useState("");
=======
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
>>>>>>> f50791c480f05bead5a99f78e913b9282be82907



  const handlePageSizeChange = (event) => {
    const newSize = Number(event.target.value);
    setPageSize(newSize);
    setCurrentPage(1);
    fetchData(1, newSize, email);
  };

  const fetchData = async (page, limit, email,first_name) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/alluser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: page,
          limit: limit,
          email: email,
          first_name:first_name
        }),
      });

      const result = await response.json();
      setTableData(result.data);
      setTotalPages(result.totalPages);
      setTotalUsers(result.totalUsers);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      fetchData(newPage, pageSize, email);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      fetchData(newPage, pageSize, email);
    }
  };

  const Handlesubmit = async (e) => {
    e.preventDefault();
     console.log(email,'first_name');
     
    fetchData(currentPage, pageSize, email,first_name);
  };


  const handleReset = () => {
    setPageSize(10);
    setCurrentPage(1);
    setEmail("");
    setTotalPages(0);
    setTableData([]);
  };
  const handleSelect = (value) => {
    console.log(value, "jkhjk")
    setEmail(value);
  };


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
          </div>

          {/* Form for Search */}
          <div className="card">
            <div className="card-body">
              <div className="form-row">
                <div className="form-group">
                  <ModalProvider>
                    <label className="cinput_lable">Name</label>
                    <DynamicTableInput
                      tsoId="TSO2"
                      tableName="users"
                      columnsToFetch="first_name,last_name,email,phone"
                      displayColumns="first_name,last_name,email"
                      inputId="TSO2_users_first_name"
                      placeholder=""
                      condition={{}}
                      onSelect={handleSelect}
                      value={first_name}
                    onChange={(e) => setfirst_name(e.target.value)}
                    />

                  </ModalProvider>
                </div>

                <div className="form-group">
                  <label className="cinput_lable">Email</label>
                  <input
                    className="cinput_field"
                    type="text"
                    id="TSO2_users_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-row form-actions">
                <button
                  onClick={Handlesubmit}
                  className="search_btn btn"
                  type="submit"
                >
                  Search
                </button>
                <button className="btn-danger" onClick={handleReset} type="reset">
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Table to display user data */}
          <div className="card">
            <div className="card-body">
              <div>
                <a href="/user-master/create">
                  <button className="btn add-btn" type="button">
                    Add
                  </button>
                </a>
              </div>

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

              {/* Pagination controls */}
              <div className="pagination-controls">
                <span>Show</span>
                <select value={pageSize} onChange={handlePageSizeChange}>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                  <option value={50}>50</option>
                </select>
                <span>Entries</span>

                <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                  <img src="/pre.png" alt="Previous" />
                </button>

                <span>
                  Page {currentPage} of {totalPages}
                </span>

                <button onClick={goToNextPage} disabled={currentPage === totalPages}>
                  <img src="/icons8-end2.png" alt="Next" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
