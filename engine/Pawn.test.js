const Pawn = require('./Pawn')

test('Pawns can be assigned a color at instantiation', () => {
  const pawn = new Pawn('black');

  expect(pawn.color).toEqual('black');
})

test('pawns should accept and save a file argument', () => {
  const pawn = new Pawn('white', 'b');

  expect(pawn.file).toEqual('b')
})

test('when the pawn is white, it will automatically have a rank of 2', () => {
  const pawn = new Pawn('white', 'g');

  expect(pawn.rank).toEqual(2);
})

test('when the pawn is black, it will automatically have a rank of 7', () => {
  const pawn = new Pawn('black', 'f');

  expect(pawn.rank).toEqual(7);
})

describe('isValidDestination', () => {
  test('it returns false if the destination rank is === the pawn\'s current rank', () => {
    const pawn = new Pawn('white', 'a');

    expect(pawn.isValidDestination(2)).toEqual(false);
  })

  test('returns true if the destinationFile is equal to the pawn\'s current file', () => {
    const pawn = new Pawn('black', 'b');

    expect(pawn.isValidDestination(6, 'b')).toEqual(true)
  })

  test('returns false if trying to move two ranks but the pawn isn\'t on it\'s starting square', () => {
    const pawn = new Pawn('black', 'd');
    pawn.rank = 6;

    expect(pawn.isValidDestination(4, 'd')).toEqual(false);

    const pawn2 = new Pawn('white', 'd');
    pawn2.rank = 3;

    expect(pawn2.isValidDestination(5, 'd')).toEqual(false);
  })

  describe('when pawn is white', () => {
    test('it returns false if the destination rank is < the pawn\'s current rank', () => {
      const pawn = new Pawn('white', 'd');

      expect(pawn.isValidDestination(1)).toEqual(false);
    })

    test('returns false when destinationRank is more than 2 greater than current rank', () => {
      const pawn = new Pawn('white', 'c');

      expect(pawn.isValidDestination(5)).toEqual(false)
    })
  })

  describe('when pawn is black', () => {
    test('it returns false if the destination rank is > the pawn\'s current rank', () => {
      const pawn = new Pawn('black', 'a');

      expect(pawn.isValidDestination(8)).toEqual(false);
    })

    test('returns false when destinationRank is more than two fewer than current rank', () => {
      const pawn = new Pawn('black', 'd');

      expect(pawn.isValidDestination(4)).toEqual(false)
    })
  })

  describe('when switching files', () => {
    test.each([
      [true, 'd', 'e'],
      [true, 'd', 'c'],
      [true, 'b', 'a'],
      [true, 'h', 'g'],
      [false, 'h', 'a'],
      [false, 'b', 'd'],
      [false, 'd', 'g'],
      [false, 'h', 'd'],
      [false, 'd', 'a']
    ])(
      'returns %s when the pawn is on the %s file and the destination file is %s',
      (expected, originFile, destinationFile) => {
        const pawn = new Pawn('white', originFile);
        expect(pawn.isValidDestination(3, destinationFile)).toEqual(expected)
      }
    )
  })

  describe('color-specific file-change logic', () => {
    describe('when the pawn is black', () => {
      test('returns false for a file change if the destinationRank !== currentRank - 1', () => {
        const pawn = new Pawn('black', 'e');
        expect(pawn.isValidDestination(7, 'f')).toEqual(false)
      })

      test('returns false for a file change if the destinationRank < currentRank - 1', () => {
        const pawn = new Pawn('black', 'e');
        expect(pawn.isValidDestination(4, 'f')).toEqual(false)
      })

      test('returns true for a file change if the destinationRank === currentRank - 1', () => {
        const pawn = new Pawn('black', 'e');
        expect(pawn.isValidDestination(6, 'f')).toEqual(true)
      })
    })

    describe('when the pawn is white', () => {
      test('returns false for a file change if the destinationRank !== currentRank + 1', () => {
        const pawn = new Pawn('white', 'e');
        expect(pawn.isValidDestination(2, 'f')).toEqual(false)
      })

      test('returns false for a file change if the destinationRank > currentRank + 1', () => {
        const pawn = new Pawn('white', 'e');
        expect(pawn.isValidDestination(4, 'f')).toEqual(false)
      })

      test('returns true for a file change if the destinationRank === currentRank + 1', () => {
        const pawn = new Pawn('white', 'e');
        expect(pawn.isValidDestination(3, 'f')).toEqual(true)
      })
    })
  })
})
