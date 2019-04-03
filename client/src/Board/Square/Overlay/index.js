import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: green;
  opacity: 0.5;
  z-index: 2;
`

export default function Overlay() {
  return <Container />
}
