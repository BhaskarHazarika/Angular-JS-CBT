var app = angular.module("app", []);
app.controller('emp', ['$scope', '$http', '$log', function($scope, $http, $log){
	$scope.a = 30;
	$scope.b = 40;

	$scope.doSum = function() {
//		$scope.sum = parseInt($scope.a) + parseInt($scope.b);
		$http({
			url: 'http://localhost:4467/Sum?a=' + $scope.a + '&b=' + $scope.b,
			method: 'GET'  	
		}).then(function(resp){
			// success function	
			$log.log(resp.data);
			$scope.sum = resp.data;	
		}, function(resp){
			// failure function	
			$log.error("ERROR occured");
//			alert("ERROR occured");

		});

	};

}]);