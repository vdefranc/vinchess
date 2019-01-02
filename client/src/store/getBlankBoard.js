
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

function getRow() {
  return files.reduce((acc, file) => {
    acc[file] = {
      pieceColor: '',
      pieceType: ''
    }

    return acc;
  }, {})
}

export default function() {
  return Array(8).fill('').reduce((acc, _, currentIndex) => {
    acc[currentIndex + 1] = getRow()

    return acc;
  }, {})
}
