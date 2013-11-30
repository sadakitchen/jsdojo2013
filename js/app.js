var mainCtrl = function($scope,$timeout){
  // 変数
  // var _ram = Math.random()*1000;
  // _ram = (_ram|0);  // Chromeで一番はやい小数点切り捨て
  $scope.questionMsg = "？";
  $scope.resultMsg = "";

  // ゲームプレイ状態
  $scope.isPlaying = false;

  // $scope.logQuestion = "まる";
  // $scope.logAnswer = "まる";
  // $scope.logResult = "まる";

  $scope.logs = [];

  // 関数
  $scope.onStartClick = function() {
    // $scope.questionMsg = ramGene();
    // $scope.isPlaying = true;
    $('#StartPanel').fadeOut(1000, function(){
      $scope.questionMsg = ramGene();
      $scope.isPlaying = true;

      // タイマースタート 10秒
      $timeout(function(){

        $scope.questionMsg = "end";
        $scope.isPlaying = false;
        $scope.$apply();
        
        alert('結果は'+$scope.logs.length + '問やりました');
      }, 10000);

      $scope.$apply();
    });
  }


  $scope.onClick = function( _ans ){

    // ゲーム開始でなければ却下
    if(!$scope.isPlaying) return;

    var _isCorrect = false;

    _isCorrect = checkFizzBuzz($scope.questionMsg, _ans);
    
    if(_isCorrect === true){
      $scope.resultMsg = "◯";
    } else {
      $scope.resultMsg = "✕";
    }
    // $scope.resultMsg = "◯";

    // 履歴に追加
    $scope.logs.unshift({question:$scope.questionMsg,answer:_ans,result:$scope.resultMsg});

    //    問題リセット
    $scope.questionMsg = ramGene();

    $('.result').show();
    $('.result').fadeOut();
  }

  // private 
  // @return 
  function ramGene(){
    var _num = Math.random()*1000;
    _num = (_num|0);
    return _num;
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
