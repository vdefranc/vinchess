const isValidMove = require('./isValidMove');

describe('isValidMove', () => {
  test('should be a function', () => {
    expect(isValidMove).toBeInstanceOf(Function)
  });

  test('returns true when moving a pawn one square forward', () => {
    expect(isValidMove('e2', 'e3')).toEqual(true)
  });

  test('returns true when moving a pawn two ranks forward, given that the pawn starts on the 2nd rank', () => {
    expect(isValidMove('e2', 'e4')).toEqual(true)
  });

  test('returns false when trying to move a pawn two ranks if it isn\'t on rank 2', () => {
    expect(isValidMove('e3', 'e5')).toEqual(false)
  })

  test('returns false when trying to move a pawn left one file', () => {
    expect(isValidMove('e2', 'c2')).toEqual(false)
  })

  test('returns false when trying to move a pawn three squares ahead', () => {
    expect(isValidMove('e2', 'e5')).toEqual(false)
  })

  test('returns false when moving a pawn backwards', () => {
    expect(isValidMove('e2', 'e1')).toEqual(false)
  })

})
