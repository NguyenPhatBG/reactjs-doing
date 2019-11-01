import React from "react";
import PropTypes from "prop-types";
import "./props.style.css";

export const Props01 = ({ id, name, age, address, onDeleteItem }) => (
  <div className="user-dob">
    <p>{name}</p>
    <p>{age}</p>
    <p>{address}</p>
    <button onClick={() => { onDeleteItem(id) }}>Delete</button>
  </div>
);

Props01.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

Props01.defaultProps = {
  id: 1,
  name: "An",
  age: 25,
  address: "HN"
};
