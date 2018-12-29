module.exports = function Pawn(color,  file) {
  this.color = color
  this.file = file
  this.rank = color === 'white' ? 2 : 7;
}
