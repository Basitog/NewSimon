import $ from 'jquery';
import Simon from './simon.js';
import './css/styles.css';


let simon = new Simon;
//Press key to start
/* green = 0, red= 1, yellow =2, blue=3 */
$(document).on("keydown", function (e) {
  if (e.keyCode === 13) {
    simon.nextSequence();
  }
});

//This displays the color  of each option
Simon.prototype.showSequence = function (element) {

  switch (element) {
  case 0:
    $("#green").addClass("dissapear");
    setTimeout(function () {
      $("#green").removeClass("dissapear");
    }, 250);
    break;
  case 1:
    $("#red").addClass("dissapear");
    setTimeout(function () {
      $("#red").removeClass("dissapear");
    }, 250);
    break;
  case 2:
    $("#yellow").addClass("dissapear");
    setTimeout(function () {
      $("#yellow").removeClass("dissapear");
    }, 250);
    break;
  case 3:
    $("#blue").addClass("dissapear");
    setTimeout(function () {
      $("#blue").removeClass("dissapear");
    }, 250);
    break;
  }
};

Simon.prototype.changeLevel = function () {
  this.levelCounter++;
  $("#level-title").text(`Level: ${this.levelCounter}`);

};

// Launches error sequence
Simon.prototype.launchError = function () {
  $("body").css("background-color", "red");
  $("h1").text("Game Over");
  setTimeout(function () {
    $("h1").text("Press Enter Key to start");
    $("body").css("background-color", "#011F3F");
  }, 1500);

  this.levelCounter = 0;
  this.sequenceMade = [];
};


//This converts the clicks into numbers and pushes it to a new array.
$(".btn").click(function () {
  let userClicked = $(this).attr("id");
  switch (userClicked) {
  case "green":
    simon.sequenceUser.push(0);
    simon.showSequence(0);
    break;

  case "red":
    simon.sequenceUser.push(1);
    simon.showSequence(1);

    
    break;

  case "yellow":
    simon.sequenceUser.push(2);
    simon.showSequence(2);
    break;

  case "blue":
    simon.sequenceUser.push(3);
    simon.showSequence(3);
    break;
  }
  simon.checkSequence(simon.sequenceUser.length - 1);
});

