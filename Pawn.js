class Pawn {
  constructor(color,  file) {
    this.color = color
    this.file = file
    this.rank = color === 'white' ? 2 : 7;
  }

  // should be named isValidDestinationRank
  isValidDestination(rank) {
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
  }
}

module.exports = Pawn
