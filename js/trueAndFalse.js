function TrueAndFalse(identifier,answer,score) {
  GetScores.call(this,identifier,answer,score);
}
TrueAndFalse.prototype = Object.create(GetScores.prototype);
TrueAndFalse.prototype.constructor = TrueAndFalse;

TrueAndFalse.prototype.getScore = function() {
  var score = 0;
  for(var i = 0; i < document.getElementsByName(this.identifier).length; i++) {
    if (document.getElementsByName(this.identifier)[i].checked &&
      document.getElementsByName(this.identifier)[i].value === this.answer) {
        score += this.score;
    }
  }
  return score;
};
