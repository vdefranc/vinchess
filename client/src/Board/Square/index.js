import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  border: 1px solid gray;

  display: flex;
  align-items: center;
  justify-content: center;
`

export default function Square({rank, file}) {
  return <Container>{file + rank}</Container>;
}

Square.propTypes = {
  file: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired
};
