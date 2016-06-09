var Player = (function(){
  function Player(params){
    this.hands = params.hands;
    this.userName = params.userName;
    this._setHand(0);
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

  // Private
  Player.prototype._setHand = function(chosenValue) {
    var value = parseInt(chosenValue);
    this.chosenHand = this.hands[value];
  };

  Player.prototype._applyBindings = function(){
    $(this.selectId).on("change", (function(e){
      this._setHand(e.target.value);
    }).bind(this));
  };

  return Player;
})();
