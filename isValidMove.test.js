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
    expect(isValidMove('e2', 'd2')).toEqual(false)
  })

  test('returns false when trying to move a pawn three squares ahead', () => {
    expect(isValidMove('e2', 'e5')).toEqual(false)
  })

  test('returns false when moving a pawn backwards', () => {
    expect(isValidMove('e2', 'e1')).toEqual(false)
  })

  describe('when moving a black pawn', () => {
    test('returns true when moving a pawn from e7 to e6', () => {
      expect(isValidMove('e7', 'e6', 'b')).toEqual(true)
    })

    test('returns true when moving a pawn from e7 to e5', () => {
      expect(isValidMove('e7', 'e5', 'b')).toEqual(true)
    })


    // Triangulation test for black pawn moves
    // test('returns true when moving a pawn from d7 to d5', () => {
    //   expect(isValidMove('d7', 'd5', 'b')).toEqual(true)
    // })

    test('returns false when moving a pawn from e6 to e4', () => {
      expect(isValidMove('e6', 'e4', 'b')).toEqual(false)
    })
  })
})
