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

const initialRanks = {
  white: 2,
  black: 7
}

class Pawn {
  constructor(color,  file) {
    this.color = color
    this.file = file
    this.rank = initialRanks[color];
  }

  // should be named isValidDestinationRank
  isValidDestination(rank, file) {
    const goodDestinationFile = this.isValidDestinationFile(file);
    let goodRank = this.isValidDestinationRank(rank);


    if (this.file !== file) {
      goodRank = this.color === 'white' ?
                    this.rank === rank - 1 :
                    this.rank === rank + 1
    }

    return goodRank && goodDestinationFile
  }

  isValidDestinationFile(file) {
    const currentFileIndex = files.indexOf(this.file);
    const destinationFileIndex = files.indexOf(file);

    return Math.abs(currentFileIndex - destinationFileIndex) <= 1;
  }

  isValidDestinationRank(rank) {
    const numSquaresAdvancing = Math.abs(this.rank - rank)

    if (this.rank === rank) {
      return false
    }

    if (numSquaresAdvancing === 2 && !this.isOnInitialRank()) {
      return false
    }

    if (this.color === 'white') {
      if (this.rank > rank) {
        return false
      }

      if (this.rank + 2 < rank) {
        return false
      }
    }

    if (this.color === 'black') {
      if (this.rank < rank) {
        return false
      }

      if (this.rank - 2 > rank) {
        return false
      }
    }

    return true
  }

  isOnInitialRank() {
    return this.rank === initialRanks[this.color];
  }
}

module.exports = Pawn
