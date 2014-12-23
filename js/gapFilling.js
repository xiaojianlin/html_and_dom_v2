var GetScores = require('./getScores');


function GapFilling(identifier,answer,score) {
  GetScores.call(this,identifier,answer,score);
}
GapFilling.prototype = Object.create(GetScores.prototype);
GapFilling.prototype.constructor = GapFilling;

GapFilling.prototype.getScore = function() {
  if (document.getElementById(this.identifier).value === this.answer) {
    return this.score;
  }
  else {
    return 0;
  }
};


module.exports = GapFilling;
