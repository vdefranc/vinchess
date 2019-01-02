import React from "react";
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import Square from ".";

Enzyme.configure({ adapter: new Adapter() });

test("Square is a function", () => {
  expect(Square).toBeInstanceOf(Function)
})

// test("square prints its position => {file + rank}", () => {
//   const wrapper = shallow(<Square file="a" rank={1} />)
//   const textContent = wrapper.children().at(0).text();
//   expect(textContent).toEqual("a1")
// })
