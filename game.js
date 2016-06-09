var Game = (function(){
  function Game(params){
    this.options = [
      new Rock(),
      new Paper(),
      new Scissors()
    ];

    this.playerOne = new Player({
      userName: params.playerOne,
      selectId: params.playerOneSelectId,
      hands: this.options
    });
    this.playerTwo = new Player({
      userName: params.playerTwo, 
      selectId: params.playerTwoSelectId,
      hands: this.options
    });
    this.winner = undefined;
    this._applyBindings(params.elements);
  }

  // Public
  Game.prototype.play = function(){
    this._chooseWinner();
    this._showResults();
  };


  // Private
  Game.prototype._showResults = function(){
    if (this._noWinner()) {
      this.winnerNotice.html("Nobody wins, is a tie!");
    } else {
      this.winnerNotice.html(this.winner.userName + ": " + this.winner.chosenHand.name + " Wins!");
    }
  };

  Game.prototype._noWinner = function(){
    return this.winner === undefined;
  };

  Game.prototype._chooseWinner = function(){
    if (this._isATie()){
      this.winner = undefined;
    } else if (this._playerOneWins()){
      this.winner = this.playerOne;
    } else {
      this.winner = this.playerTwo;
    }
  };

  Game.prototype._isATie = function(){
    return this.playerOne.isTied(this.playerTwo);
  };

  Game.prototype._playerOneWins = function() {
    return this.playerOne.beats(this.playerTwo);
  };

  Game.prototype._applyBindings = function(elements) {
    this.winnerNotice = $(elements.winnerNoticeId);
    $(elements.playButtonId).on("click", (function(e){
      this.play();
    }).bind(this));
  };

  return Game;
})();
