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

