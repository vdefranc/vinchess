const isValidMove = require('./isValidMove');

describe('isValidMove', () => {
  test('should be a function', () => {
    expect(isValidMove).toBeInstanceOf(Function)
  });
})
