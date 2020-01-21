import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(255, 255, 51);
  z-index: 2;
`

export default function Overlay({isDarkSquare}) {
  const opacity = isDarkSquare ? 0.6 : 0.45
  return <Container style={{opacity}} />
}
