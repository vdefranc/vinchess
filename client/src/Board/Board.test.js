import Board from ".";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('Board is a function', () => {
  expect(Board).toBeInstanceOf(Function)
})

// test('Board has 64 ')
