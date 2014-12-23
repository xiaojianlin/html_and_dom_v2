var GetScores = require('./getScores');


function SingleChoice(identifier,answer,score) {
  GetScores.call(this,identifier,answer,score);
}
SingleChoice.prototype = Object.create(GetScores.prototype);
SingleChoice.prototype.constructor = SingleChoice;

SingleChoice.prototype.getScore = function() {
  var score = 0;
  for(var i = 0; i < document.getElementsByName(this.identifier).length; i++) {
    if (document.getElementsByName(this.identifier)[i].checked &&
      document.getElementsByName(this.identifier)[i].value === this.answer) {
        score += this.score;
      }
    }
    return score;
  };


module.exports = SingleChoice;
