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

class Pawn {
  constructor(color,  file) {
    this.color = color
    this.file = file
    this.rank = color === 'white' ? 2 : 7;
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
    if (this.rank === rank) {
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
}

module.exports = Pawn
