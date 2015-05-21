var Scissors = (function(){
  function Scissors(){
    this.name = "scissors";
  }

  Scissors.prototype.beats = function(otherObject){
    return otherObject.name == "paper";
  }

  Scissors.prototype.eq = function(otherObject){
    return otherObject.name == this.name;
  }

  return Scissors;
})();
