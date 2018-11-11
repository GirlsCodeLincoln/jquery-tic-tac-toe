$(document).ready(function () {
  var move = 1;
  var play = true;
  var player = "1";

  $(".game-space").click(function () {
    // debugger;
    var $squareClicked = $(this);
    if ($squareClicked.text() === "" && play) {
      if (player === "1") {
        $squareClicked.append("X");
        player = "2";
      } else {
        $squareClicked.append("O");
        player = "1";
      }

      move = move + 1;

      var winStatus = checkForWinner();
      if (winStatus !== -1) {
        if (winStatus === "X") {
          alert("Player 1 wins!");
        } else {
          alert("Player 2 wins!");
        }

        play = false;
      }
    }
  });

  function checkForWinner() {
    var space1 = $("#space1").text();
    var space2 = $("#space2").text();
    var space3 = $("#space3").text();
    var space4 = $("#space4").text();
    var space5 = $("#space5").text();
    var space6 = $("#space6").text();
    var space7 = $("#space7").text();
    var space8 = $("#space8").text();
    var space9 = $("#space9").text();

    // check rows
    if (space1 !== "" && (space1 === space2) && (space2 === space3)) {
      return space1;
    }
    
    if (space4 !== "" && (space4 === space5) && (space5 === space6)) {
      return space4;
    }
    
    if (space7 !== "" && (space7 === space8) && (space8 === space9)) {
      return space9;
    }

    // check columns
    if (space1 !== "" && (space1 === space4) && (space4 === space7)) {
      return space1;
    }

    if (space2 !== "" && (space2 === space5) && (space5 === space8)) {
      return space2;
    }

    if (space3 !== "" && (space3 === space6) && (space6 === space9)) {
      return space3;
    }

    // check diagonals
    if (space1 !== "" && (space1 === space5) && (space5 === space9)) {
      return space1;
    }

    if (space3 !== "" && (space3 === space5) && (space5 === space7)) {
      return space3;
    }

    // no winner
    return -1;
  }
});
