function MultipleChoice(identifier,answer,score) {
  GetScores.call(this,identifier,answer,score);
}
MultipleChoice.prototype = Object.create(GetScores.prototype);
MultipleChoice.prototype.constructor = MultipleChoice;

MultipleChoice.prototype.getScore = function() {
  var string = '';
  for(var i = 0; i < document.getElementsByName(this.identifier).length; i++) {
    if(document.getElementsByName(this.identifier)[i].checked) {
      string += document.getElementsByName(this.identifier)[i].value;
    }
  }
  if (string === this.answer) {
    return this.score;
  }
  else {
    return 0;
  }
};
