describe("mainController", function () {
		var TEST_DATA = [
											['3','Fizz','◯'],
											['5','Buzz','◯'],
											['3','Buzz','✕'],
											['15','FizzBuzz','◯'],
											['16','Other','◯']
										];

		TEST_DATA.forEach(function(data){
			it('クエスチョンが'+ data[0] +'の場合、ユーザーが'+ data[1] +'を選択したら'+ data[2] +' : ', function() {
        var scope = {},
            ctrl = new mainCtrl(scope);

        scope.isPlaying = true;
        scope.questionMsg = data[0];
        scope.onClick(data[1]);
        expect(scope.resultMsg).toBe(data[2]);
    	});
		});

		it('履歴に過去の正答が追加されていること : ',function(){
			var scope = {},
          ctrl = new mainCtrl(scope);
      
      expect(scope.logs.length).toBe(0);

      scope.isPlaying = true;
      scope.questionMsg = '3';
      scope.onClick('Fizz');

      expect(scope.logs[0].question).toBe('3');

		});

});