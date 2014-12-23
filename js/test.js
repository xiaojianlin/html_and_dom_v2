(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./getScores":2}],2:[function(require,module,exports){
function GetScores(identifier,answer,score) {
  this.identifier = identifier;
  this.answer = answer;
  this.score = score;
}

GetScores.prototype.getScore = function() {

};

module.exports = GetScores;

},{}],3:[function(require,module,exports){
var Question = require('./question');
var TrueAndFalse = require('./trueAndFalse');
var MultipleChoice = require('./multipleChoice');
var SingleChoice = require('./singleChoice');
var GapFilling = require('./gapFilling');

$(document).ready(function() {
  $('#write').on('click',function() {
    checkform();
  });
});


function checkform() {
  if (document.getElementById('classes').value === '' ||
     document.getElementById('student_number').value === '' ||
     document.getElementById('name').value === '') {
     alert('请填写班级、学号和姓名！');
     }
  else {
    document.getElementById("score").value = getAnswer();
  }
  return false;
}


function getAnswer() {
  var score = 0;
  var answers = [
  new GapFilling('1_1','统一建模语言',5),
  new GapFilling('1_2_1','封装性',5),
  new GapFilling('1_2_2','继承性',5),
  new GapFilling('1_2_3','多态性',5),
  new SingleChoice('2_1','B',10),
  new SingleChoice('2_2','A',10),
  new MultipleChoice('3_1','ABD',10),
  new MultipleChoice('3_2','ABC',10),
  new TrueAndFalse('4_1','错',10),
  new TrueAndFalse('4_2','对',10),
  new Question('5_1','模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。',20)
  ];
  for (i = 0; i < answers.length; i++) {
    score += answers[i].getScore();
  }
  score = ' ' + score +  ' 分';
  return score;
}

},{"./gapFilling":1,"./multipleChoice":4,"./question":5,"./singleChoice":6,"./trueAndFalse":7}],4:[function(require,module,exports){
var GetScores = require('./getScores');


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


module.exports = MultipleChoice;

},{"./getScores":2}],5:[function(require,module,exports){
var GetScores = require('./getScores');


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


module.exports = Question;

},{"./getScores":2}],6:[function(require,module,exports){
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

},{"./getScores":2}],7:[function(require,module,exports){
var GetScores = require('./getScores');


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


module.exports = TrueAndFalse;

},{"./getScores":2}]},{},[3]);
