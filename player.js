var Player = (function(){
  function Player(params){
    this.hands = params.hands;
    this.userName = params.userName;
    this.chosenHand = this.hands[0];
    this.selectId = params.selectId;
    this._applyBindings();
  }

  // Public
  Player.prototype.beats = function(otherPlayer){
    return this.chosenHand.beats(otherPlayer.chosenHand);
  };

  Player.prototype.isTied = function(otherPlayer){
    return this.chosenHand.eq(otherPlayer.chosenHand);
  };

  Player.prototype.setHand = function(chosenValue) {
    var value = parseInt(chosenValue);
    this.chosenHand = this.hands[value];
  };

  // Private
  Player.prototype._applyBindings = function(){
    $(this.selectId).on("change", (function(e){
      this.setHand(e.target.value);
    }).bind(this));
  };

  return Player;
})();
