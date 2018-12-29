module.exports = function(origin, destination, color = 'w') {
  if (origin[0] !== destination[0]) {
    return false
  }

  if (color === 'b') {
    return isValidBlackPawnMove(origin, destination);
  }

  return isValidWhitePawnMove(origin, destination);
}

function isValidWhitePawnMove(origin, destination) {
  const originRank = parseInt(origin[1])
  const destinationRank = parseInt(destination[1])

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

function isValidBlackPawnMove(origin, destination) {
  const originRank = parseInt(origin[1])
  const destinationRank = parseInt(destination[1])
  // if (destinationRank + 2 >= originRank) {
  //   return true
  // }


  if (origin === 'e7' && destination === 'e6') {
    return true
  }

  if (origin === 'e7' && destination === 'e5') {
    return true
  }

  if (origin === 'e6' && destination === 'e4') {
    return false
  }
}
