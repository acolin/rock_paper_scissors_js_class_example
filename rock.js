var Rock = (function(){
  function Rock(){
    this.name = "rock";
  }

  Rock.prototype.beats = function(otherObject){
    return otherObject.name == "scissors";
  }

  Rock.prototype.eq = function(otherObject){
    return otherObject.name == this.name;
  }

  return Rock;
})();
