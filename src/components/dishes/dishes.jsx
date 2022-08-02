import React, { useContext } from "react";
import { Context } from "../../actions/actionType";
import DishesList from "./dishesList";
import "./style.css";
import Header from "./header";

const Dishes = () => {
  const { dishes } = useContext(Context);

  return (
    <>
      <Header />
      <div className="dishes-container container">
        <div className="row justify-content-center">
          {dishes &&
            dishes.map((item, index) => {
              return <DishesList item={item} key={index} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Dishes;
