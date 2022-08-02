import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../actions/actionType";
import "./tab.css";

function Tabs() {
  const navigate = useNavigate();

  const { votes } = useContext(Context);

  return (
    <div className="tabs-container">
      <nav>
        <h1 className="mb-5">!! Welcome !!</h1>
        <ul className="nav">
          <li className="nav-item">
            <button
              className="btn btn-pink text-light"
              onClick={() => navigate("/dishes")}
            >
              Dishes
            </button>
          </li>
          <li className="nav-item">
            <button
              className="btn btn-pink text-light"
              disabled={votes.length === 0 ? true : false}
              onClick={() => navigate("/selecteddishes")}
            >
              Selected Dishes
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Tabs;
