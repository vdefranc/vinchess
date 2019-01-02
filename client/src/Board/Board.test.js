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
    const files = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h'
    ];

    files.forEach((file, fileIndex) => {
      test(`${file.toUpperCase()} file squares are correct`, () => {
        const squares = getSquares();

        // [0, 8, 16, 24, 32, 40, 48, 56]
        // [1, 9, 17, 25, 33, 41, 49, 57]
        // [2, 10, 18, 26, 34, 42, 50, 58]
        // [3, 11, 19, 27, 35, 43, 51, 59]
        // [4, 12, 20, 28, 36, 44, 52, 60]
        // [5, 13, 21, 29, 37, 45, 53, 61]
        // [6, 14, 22, 30, 38, 46, 54, 62]
        // [7, 15, 23, 31, 39, 47, 55, 63]
        const testIndicies = Array(8).fill('').map((_, i) => {
          let indexOfSquareToTest = i;

          if (fileIndex === 0 && i === 0) {
            return 0;
          }

          return (i * 8) + fileIndex;
        })

        testIndicies.forEach(index => {
          expect(squares[index].prop("file")).toEqual(file);
        })
      })
    })
  })

  describe('the value of the rank props', () => {
    const squares = getSquares();

    test('the first square should have rank of 1', () => {
      const square = getSquares()[0];

      expect(square.prop("rank")).toEqual(1);
    })

    test('the 9th square should have rank of 2', () => {
      const square = getSquares()[8];

      expect(square.prop("rank")).toEqual(2);
    })
  })
})

function getSquares() {
  const wrapper = shallow(<Board />);
  const squares = wrapper.find("Square");

  return squares.map(node => node);
}
