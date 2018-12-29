const Pawn = require('./Pawn')

test('Pawn is a function', () => {
  expect(Pawn).toBeInstanceOf(Function)
})

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


  describe('when pawn is white', () => {
    test('it returns false if the destination rank is < the pawn\'s current rank', () => {
      const pawn = new Pawn('white', 'd');

      expect(pawn.isValidDestination(1)).toEqual(false);
    })

    test('returns false when destinationRank is more than greater than current rank', () => {
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
})
