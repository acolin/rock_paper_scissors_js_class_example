var Player = (function(){
  function Player(params){
    this.userName = params.userName;
    this.chosenHand = undefined;
  }

  // Public
  Player.prototype.beats = function(otherPlayer){
    return this.chosenHand.beats(otherPlayer.chosenHand);
  }

  Player.prototype.isTied = function(otherPlayer){
    return this.chosenHand.eq(otherPlayer.chosenHand);
  }

  return Player;
})();
