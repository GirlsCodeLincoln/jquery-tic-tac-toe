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
    }
  });
});
