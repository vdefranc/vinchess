import getBlankBoard from "./getBlankBoard";

export default function getFilledBoard() {
  const blank = getBlankBoard();

  for (var rank in blank) {
    for (var file in blank[rank]) {

      // PAWN SHIT
      if (rank === '2') {
        blank[rank][file].type = 'pawn'
        blank[rank][file].color = 'b'
      }

      if (rank === '7') {
        blank[rank][file].type = 'pawn'
        blank[rank][file].color = 'w'
      }

      // rook shit
      if (rank === "8") {
        if (file === "a" || file === "h") {
          blank[rank][file].type = "rook";
          blank[rank][file].color = 'w'
        }

        if (file === "b" || file === "g") {
          if (rank === "8") {
            blank[rank][file].color = "b"
          } else if (rank === "1") {
            blank[rank][file].color = "w"
          }

          blank[rank][file].type = "knight"
          blank[rank][file].color = 'w'
        }

        if (file === "c" || file === "f") {
          if (rank === "8") {
            blank[rank][file].color = "b"
          } else if (rank === "1") {
            blank[rank][file].color = "w"
          }

          blank[rank][file].type = "bishop"
          blank[rank][file].color = 'w'
        }

        if (file === "d") {
          if (rank === "8") {
            blank[rank][file].color = "b"
          } else if (rank === "1") {
            blank[rank][file].color = "w"
          }

          blank[rank][file].type = "king"
          blank[rank][file].color = 'w'
        }

        if (file === "e") {
          if (rank === "8") {
            blank[rank][file].color = "b"
          } else if (rank === "1") {
            blank[rank][file].color = "w"
          }

          blank[rank][file].type = "queen"
          blank[rank][file].color = 'w'
        }
      }

      if (rank === "1") {
        if (file === "a" || file === "h") {
          blank[rank][file].type = "rook";
          blank[rank][file].color = 'b'
        }

        if (file === "b" || file === "g") {
          if (rank === "8") {
            blank[rank][file].color = "b"
          } else if (rank === "1") {
            blank[rank][file].color = "b"
          }

          blank[rank][file].type = "knight"
          blank[rank][file].color = 'b'
        }

        if (file === "c" || file === "f") {
          if (rank === "8") {
            blank[rank][file].color = "b"
          } else if (rank === "1") {
            blank[rank][file].color = "b"
          }

          blank[rank][file].type = "bishop"
          blank[rank][file].color = 'b'
        }

        if (file === "d") {
          if (rank === "8") {
            blank[rank][file].color = "b"
          } else if (rank === "1") {
            blank[rank][file].color = "b"
          }

          blank[rank][file].type = "king"
          blank[rank][file].color = 'b'
        }

        if (file === "e") {
          if (rank === "8") {
            blank[rank][file].color = "b"
          } else if (rank === "1") {
            blank[rank][file].color = "b"
          }

          blank[rank][file].type = "queen"
          blank[rank][file].color = 'b'
        }
      }
    }
  }

  return blank;
}
