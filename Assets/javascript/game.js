$(document).ready(function() {
  var compRandom = Math.floor(Math.random() * 155 + 30);
  // computer picks a random number to be shown at the start of the game

  $("#randNum").text(compRandom);
  // Appending random number to the randnum div

  var num1 = Math.floor(Math.random() * 14 + 1);
  var num2 = Math.floor(Math.random() * 14 + 1);
  var num3 = Math.floor(Math.random() * 14 + 1);
  var num4 = Math.floor(Math.random() * 14 + 1);
  // Setting up random numbers for each crystals

  var userTotal = 0;
  var wins = 0;
  var losses = 0;
  //  Decaring variables for wins and losses
  $("#numWins").text(wins);
  $("#numLosses").text(losses);
  //resets the game
  function reset() {
    compRandom = Math.floor(Math.random() * 155 + 30);
    console.log(compRandom);
    $("#randNumb").text(compRandom);
    num1 = Math.floor(Math.random() * 14 + 1);
    num2 = Math.floor(Math.random() * 14 + 1);
    num3 = Math.floor(Math.random() * 14 + 1);
    num4 = Math.floor(Math.random() * 14 + 1);
    userTotal = 0;
    $("#finalTotal").text(userTotal);
  }
  //incrementing wins
  function win() {
    alert("You won!");
    wins++;
    $("#numWins").text(wins);
    reset();
  }
  //incrementing losses
  function lose() {
    alert("You lose!");
    losses++;
    $("#numLosses").text(losses);
    reset();
  }
  //onclick event listeners for crystals
  $("#blue_crystal").on("click", function() {
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    //wins and losses conditions
    if (userTotal == compRandom) {
      win();
    } else if (userTotal > compRandom) {
      lose();
    }
  });
  $("#pink_crystal").on("click", function() {
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);
    if (userTotal == compRandom) {
      win();
    } else if (userTotal > compRandom) {
      lose();
    }
  });
  $("#purple_crystal").on("click", function() {
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == compRandom) {
      win();
    } else if (userTotal > compRandom) {
      lose();
    }
  });
  $("#red_crystal").on("click", function() {
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $("#finalTotal").text(userTotal);

    if (userTotal == compRandom) {
      win();
    } else if (userTotal > compRandom) {
      lose();
    }
  });
});
