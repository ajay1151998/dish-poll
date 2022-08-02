import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../actions/actionType";

const Header = () => {
  const navigate = useNavigate();
  const { votes } = useContext(Context);

  const handleResult = () => {
    navigate("/result");
  };

  return (
    <>
      <nav className="nav bg-light sticky-top py-4">
        <button
          className="nav-item btn btn-lg btn-success w-25 m-auto"
          disabled={votes.length === 0 ? true : false}
          onClick={handleResult}
        >
          Result
        </button>
      </nav>
    </>
  );
};

export default Header;
