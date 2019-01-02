import React from "react";
import PropTypes from "prop-types";

export default function Square({rank, file}) {
  return <p>{file + rank}</p>;
}

Square.propTypes = {
  file: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired
};
