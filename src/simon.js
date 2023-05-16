export default function Simon() {
  this.sequenceMade = [];
  this.sequenceUser = [];
  this.levelCounter = 0;
}

//This generates a random number and pushes it to the sequenceMade.
Simon.prototype.nextSequence = function () {
  let randomNumber = Math.floor(Math.random() * 4);
  this.sequenceMade.push(randomNumber);
  this.showSequence(this.sequenceMade[this.sequenceMade.length - 1]);
  this.changeLevel();
  this.sequenceUser = [];
};

//This checks if the sequences is correct so far
Simon.prototype.checkSequence = function (indexOfArray) {

  if (this.sequenceUser[indexOfArray] === this.sequenceMade[indexOfArray]) {

    if (this.sequenceMade.length === this.sequenceUser.length) {
      let me = this;
      setTimeout(function () {
        me.nextSequence();
      }, 1000);
    }
  } else {
    this.launchError();
  }
};