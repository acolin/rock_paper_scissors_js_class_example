var Paper = (function(){
  function Paper(){
    this.name = "paper";
  }

  Paper.prototype.beats = function(otherObject){
    return otherObject.name == "rock";
  }

  Paper.prototype.eq = function(otherObject){
    return otherObject.name == this.name;
  }

  return Paper;
})();
