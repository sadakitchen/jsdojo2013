describe("mainController", function () {
    it('should create "phones" model with 3 phones', function() {
        var scope = {},
            ctrl = new mainCtrl(scope);
 
        scope.questionMsg = "3";
        scope.onClick("Fizz")
        expect(scope.resultMsg).toBe("◯");
    });
});