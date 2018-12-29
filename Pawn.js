class Pawn {
  constructor(color,  file) {
    this.color = color
    this.file = file
    this.rank = color === 'white' ? 2 : 7;
  }
}

module.exports = Pawn
