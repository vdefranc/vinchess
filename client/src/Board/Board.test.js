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

  describe('the value of the file props', () => {
    test("A file squares are correct", () => {
      const squares = getSquares();

      [0, 8, 16, 24, 32, 40, 48, 56].forEach(index => {
        expect(squares[index].prop("file")).toEqual("a");
      })
    })

    test("B file squares are correct", () => {
      const squares = getSquares();

      [1, 9, 17, 25, 33, 41, 49, 57].forEach(index => {
        expect(squares[index].prop("file")).toEqual("b");
      })
    })

    test("C file squares are correct", () => {
      const squares = getSquares();

      [2, 10, 18, 26, 34, 42, 50, 58].forEach(index => {
        expect(squares[index].prop("file")).toEqual("c");
      })
    })

    test("D file squares are correct", () => {
      const squares = getSquares();

      [3, 11, 19, 27, 35, 43, 51, 59].forEach(index => {
        expect(squares[index].prop("file")).toEqual("d");
      })
    })

    test("E file squares are correct", () => {
      const squares = getSquares();

      [4, 12, 20, 28, 36, 44, 52, 60].forEach(index => {
        expect(squares[index].prop("file")).toEqual("e");
      })
    })

    test("F file squares are correct", () => {
      const squares = getSquares();

      [5, 13, 21, 29, 37, 45, 53, 61].forEach(index => {
        expect(squares[index].prop("file")).toEqual("f");
      })
    })

    test("G file squares are correct", () => {
      const squares = getSquares();

      [6, 14, 22, 30, 38, 46, 54, 62].forEach(index => {
        expect(squares[index].prop("file")).toEqual("g");
      })
    })

    test("H file squares are correct", () => {
      const squares = getSquares();

      [7, 15, 23, 31, 39, 47, 55, 63].forEach(index => {
        expect(squares[index].prop("file")).toEqual("h");
      })
    })
  })
})

function getSquares() {
  const wrapper = shallow(<Board />);
  const squares = wrapper.find("Square");

  return squares.map(node => node);
}
