function Question(identifier,answer,score) {
  GetScores.call(this,identifier,answer,score);
}
Question.prototype = Object.create(GetScores.prototype);
Question.prototype.constructor = Question;

Question.prototype.getScore = function() {
  if (document.getElementById(this.identifier).value === this.answer) {
    return this.score;
  }
  else {
    return 0;
  }
};
