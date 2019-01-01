import React from "react";
import PropTypes from "prop-types";

export default function Square(props) {
  return <p>square here</p>;
}

Square.propTypes = {
  file: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired
};
