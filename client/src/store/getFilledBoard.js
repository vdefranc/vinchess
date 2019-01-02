import getBlankBoard from "./getBlankBoard";

export default function getFilledBoard() {
  const blank = getBlankBoard();

  for (var rank in blank) {
    for (var file in blank[rank]) {
      // console.log(blank[rank][file])
      if (rank === '2') {
        blank[rank][file].type = 'p'
        blank[rank][file].color = 'b'
      }

      if (rank === '7') {
        blank[rank][file].type = 'p'
        blank[rank][file].color = 'w'
      }
    }
  }

  return blank;
}
