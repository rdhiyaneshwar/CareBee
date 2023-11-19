import React from "react";
import "../assets/css/Dashboard.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUtensils,
  faLeaf,
  faBath,
  faUsers,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { getProduct, deleteProduct } from "../services/api";

const Dash = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch data from your backend when the component mounts
    async function fetchData() {
      try {
        const response = await getProduct(); // Replace with your API function
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id); // Replace with your API delete function
      // Update the products list after successful deletion
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <>
      <div className="dash">
        <div className="dashboard-container">
          <header className="header">
            <h1 className="mag">
              <i className="fas fa-tachometer-alt"></i>{" "}
              <span className="first-letter">Dash</span>
              <span className="second-letter">board</span>
            </h1>
            <Link to="/" className="logout-button">
              <i className="fas fa-sign-out-alt"></i> Logout
            </Link>
          </header>
          <main className="main-content">
            <div className="sidebar">
              <ul className="nav-menu">
                <li className="nav-item">
                  <Link to="/home">
                    <FontAwesomeIcon icon={faHome} className="icon" />
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/diet">
                    <FontAwesomeIcon icon={faUtensils} className="icon" />
                    DIET
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ecohaven">
                    <FontAwesomeIcon icon={faLeaf} className="icon" />
                    ECO-HAVEN
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/sanitation">
                    <FontAwesomeIcon icon={faBath} className="icon" />
                    SANITATION
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/mobilizing">
                    <FontAwesomeIcon icon={faUsers} className="icon" />
                    MOBILIZING
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/feedback">
                    <FontAwesomeIcon icon={faComments} className="icon" />
                    FEEDBACK
                  </Link>
                </li>
              </ul>
            </div>
            <div className="content">
              {/* Four Cool Cards */}
              <div className="cardj">
                <h2>WELCOME </h2>
                <p>
                  {" "}
                  "To our Elderly Home, where every day is a new chapter filled
                  with warmth and care."{" "}
                </p>
              </div>
              <div className="cardcontainer">
                <div className="pie-chart">
                  <h2>People's Choice</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id}>
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td>{product.dob}</td>
                          <td>{product.gender}</td>
                          <td>{product.address}</td>
                          <td>{product.email}</td>
                          <td>{product.phone}</td>
                          <td>
                            <Link to={'/edit/{product.id}'}>Edit</Link>

                            <button onClick={() => handleDelete(product.id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dash;