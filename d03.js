var app = angular.module("app", []);
app.controller('emp', ['$scope', function($scope){
	$scope.a = 30;
	$scope.b = 40;

	$scope.doSum = function() {
		$scope.sum = parseInt($scope.a) + parseInt($scope.b);

	};

}]);