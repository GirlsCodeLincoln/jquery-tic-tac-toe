$(document).ready(function () {
  var move = 1;
  var play = true;
  var player = "1";

  $(".game-space").click(function () {
    // debugger;
    var $squareClicked = $(this);
    if ($squareClicked.text() === "" && play) {
      var nextPlayer = "";

      if (player === "1") {
        $squareClicked.append("X");
        nextPlayer = "2";
      } else {
        $squareClicked.append("O");
        nextPlayer = "1";
      }

      move = move + 1;

      var winStatus = checkForWinner();
      if (winStatus) {
        alert("Player " + player + " is the winner!");

        play = false;
      }

      player = nextPlayer;
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
      return true
    }
    
    if (space4 !== "" && (space4 === space5) && (space5 === space6)) {
      return true;
    }
    
    if (space7 !== "" && (space7 === space8) && (space8 === space9)) {
      return true;
    }

    // check columns
    if (space1 !== "" && (space1 === space4) && (space4 === space7)) {
      return true;
    }

    if (space2 !== "" && (space2 === space5) && (space5 === space8)) {
      return true;
    }

    if (space3 !== "" && (space3 === space6) && (space6 === space9)) {
      return true;
    }

    // check diagonals
    if (space1 !== "" && (space1 === space5) && (space5 === space9)) {
      return true;
    }

    if (space3 !== "" && (space3 === space5) && (space5 === space7)) {
      return true;
    }

    // no winner
    return false;
  }
});
