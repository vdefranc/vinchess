module.exports = function(origin, destination) {
  const originRank = parseInt(origin[1])
  const destinationRank = parseInt(destination[1])

  if (origin[0] !== destination[0]) {
    return false
  }

  if (originRank + 2 < destinationRank) {
    return false
  }

  if (originRank >= destinationRank) {
    return false
  }

  if (originRank + 2 === destinationRank && originRank !== 2) {
    return false
  }

  return true;
}
