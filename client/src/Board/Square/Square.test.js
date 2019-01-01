import Square from ".";
// import Enzyme, { shallow } from 'enzyme';
// import Adapter from "enzyme-adapter-react-16";

// Enzyme.configure({ adapter: new Adapter() });

test("Square is a function", () => {
  expect(Square).toBeInstanceOf(Function)
})
