import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Board from ".";

Enzyme.configure({ adapter: new Adapter() });

test("Board is a function", () => {
  expect(Board).toBeInstanceOf(Function)
})

test("Board has 64 <Square> children", () => {
  const wrapper = shallow(<Board />);

  expect(wrapper.find("Square").length).toEqual(64);
})


describe("Square props", () => {
  test("each square has a file prop", () => {
    const squares = getSquares();

    squares.map(node => {
      expect(node.prop("file")).toBeDefined();
    });
  })

  test("each square has a rank prop", () => {
    const squares = getSquares();

    squares.forEach(square => {
      expect(square.prop("rank")).toBeDefined();
    });
  })
})

function getSquares() {
  const wrapper = shallow(<Board />);
  const squares = wrapper.find("Square");

  return squares.map(node => node);
}
