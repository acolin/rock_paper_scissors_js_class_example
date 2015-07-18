var Game = (function(){
  function Game(params){
    this.options = [
      new Rock(),
      new Paper(),
      new Scissors()
    ];

    this.playerOne = new Player({userName: params.playerOne, selectId: params.playerOneSelectId});
    this.playerTwo = new Player({userName: params.playerTwo, selectId: params.playerTwoSelectId});
    this.winner = undefined;
  }

  // Public
  Game.prototype.play = function(){
    this._askPlayers();
    this._chooseWinner();
    this._showResults();
  }


  // Private
  Game.prototype._askPlayers = function(){
    [this.playerOne, this.playerTwo].forEach(this._askPlayerHand.bind(this));
  }

  Game.prototype._askPlayerHand = function(player){
    var chosenHand = parseInt(prompt(player.userName + " Choose -> 0: Rock, 1: Paper, 2: Scissors"));
    player.chosenHand = this.options[chosenHand];
  }

  Game.prototype._showResults = function(){
    if (this._noWinner()) {
      alert("Is a tie");
    } else {
      alert(this.winner.userName + ": " + this.winner.chosenHand.name + " Wins!");
    }
  }

  Game.prototype._noWinner = function(){
    return this.winner == undefined;
  }

  Game.prototype._chooseWinner = function(){
    if (this._isATie()){
      this.winner = undefined;
    } else if (this._playerOneWins()){
      this.winner = this.playerOne;
    } else {
      this.winner = this.playerTwo;
    }
  }

  Game.prototype._isATie = function(){
    return this.playerOne.isTied(this.playerTwo);
  }

  Game.prototype._playerOneWins = function(){
    return this.playerOne.beats(this.playerTwo);
  }

  return Game;
})();
