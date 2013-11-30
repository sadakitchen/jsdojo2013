var mainCtrl = function($scope){
  // 変数
  $scope.questionMsg = "3";
  $scope.resultMsg = "";

  // 関数
  $scope.onClick = function( _ans ){

    var _isCorrect = false;

    _isCorrect = checkFizzBuzz($scope.questionMsg, _ans);
    
    if(_isCorrect === true){
      $scope.resultMsg = "◯";
    } else {
      $scope.resultMsg = "✕";
    }
    // $scope.resultMsg = "◯";
    $('.result').show();
    $('.result').fadeOut();
  }

  // private 
  // @return 
  function checkFizzBuzz(_question_num, _user_answer){
    // 問題の数値をFizz|
    var _isFizz = false;
    var _isBuzz = false;
    var _result = false;

    if( parseInt(_question_num, 10) % 3 === 0){
      _isFizz = true;
    }
    if( parseInt(_question_num, 10) % 5 === 0){
      _isBuzz = true;
    }

    // ユーザーの答え分岐
    switch(_user_answer){
      case 'FizzBuzz':
        if(_isFizz && _isBuzz) _result = true;
        break;
      case 'Fizz':
        if(_isFizz && !_isBuzz) _result = true;
        break;
      case 'Buzz':
        if(!_isFizz && _isBuzz) _result = true;
        break;
      case 'Other':
        if(!_isFizz && !_isBuzz) _result = true;
        break;
    }

    return _result;
  }
}
