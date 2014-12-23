var Question = require('./question');
var TrueAndFalse = require('./trueAndFalse');
var MultipleChoice = require('./multipleChoice');
var SingleChoice = require('./singleChoice');
var GapFilling = require('./gapFilling');


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
