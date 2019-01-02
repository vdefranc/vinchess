import getBlankBoard from "./getBlankBoard";

export default function getFilledBoard() {
  const blank = getBlankBoard();

  for (var rank in blank) {
    for (var file in blank[rank]) {

      // PAWN SHIT
      if (rank === '2') {
        blank[rank][file].type = 'p'
        blank[rank][file].color = 'b'
      }

      if (rank === '7') {
        blank[rank][file].type = 'p'
        blank[rank][file].color = 'w'
      }

      // rook shit
      if (rank === "1" || rank === "8") {
        if (file === "a" || file === "h") {
          blank[rank][file].type = "r";
        }

        if (file === "b" || file === "g") {
          blank[rank][file].type = "k"
        }
      }
    }
  }

  return blank;
}
