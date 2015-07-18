var Player = (function(){
  function Player(params){
    this.userName = params.userName;
    this.chosenHand = undefined;
    this.selectId = params.selectId;
  }

  // Public
  Player.prototype.beats = function(otherPlayer){
    return this.chosenHand.beats(otherPlayer.chosenHand);
  }

  Player.prototype.isTied = function(otherPlayer){
    return this.chosenHand.eq(otherPlayer.chosenHand);
  }

  // Private
  Player.prototype_applyBindings = function(){
    $(this.selectId).on("change", function(){
    });
  }

  return Player;
})();
