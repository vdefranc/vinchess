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
};

class Pawn {
  constructor(color,  file) {
    this.color = color;
    this.file = file;
    this.rank = initialRanks[color];
  }

  // should be named isValidDestinationRank
  isValidDestination(rank, file) {
    const isRequestingFileChange = this.file !== file;
    const goodDestinationFile = this.isValidDestinationFile(file);
    let goodRank = this.isValidDestinationRank(rank);

    if (isRequestingFileChange) {
      goodRank = rank === this.getNextRank();
    }

    return goodRank && goodDestinationFile;
  }

  isValidDestinationFile(file) {
    const currentFileIndex = files.indexOf(this.file);
    const destinationFileIndex = files.indexOf(file);

    return Math.abs(currentFileIndex - destinationFileIndex) <= 1;
  }

  isValidDestinationRank(rank) {
    const numRanksAdvancing = Math.abs(this.rank - rank);

    if (this.rank === rank) {
      return false;
    }

    if (!this.isDestinationRankAnAdvance(rank)) {
      return false;
    }

    if (numRanksAdvancing > this.getMaxRanksOfAdvance()) {
      return false;
    }

    return true;
  }

  getNextRank() {
    return this.color === 'white' ? this.rank + 1 : this.rank - 1;
  }

  isDestinationRankAnAdvance(rank) {
    if (this.color === "white") {
      return rank > this.rank;
    } else {
      return rank < this.rank;
    }
  }

  getMaxRanksOfAdvance() {
    if (this.isOnInitialRank()) {
      return 2;
    }

    return 1;
  }

  isOnInitialRank() {
    return this.rank === initialRanks[this.color];
  }
}

module.exports = Pawn;
