var app = angular.module("app", []);
app.controller('emp', ['$scope', function($scope){
	$scope.a = 30;
	$scope.b = 40;

	$scope.doDoubleAndSum = function(){
		$scope.a = $scope.a * 2;
		$scope.b = $scope.b * 2;
		$scope.sum = parseInt($scope.a) + parseInt($scope.b);

	};

}]);