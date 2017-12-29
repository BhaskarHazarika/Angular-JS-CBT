var app = angular.module("app", []);
app.controller('emp', ['$scope','calcService', function($scope, calcService){
	$scope.a = 30;
	$scope.b = 40;

	$scope.doSum = function() {
		calcService.getSum($scope.a, $scope.b, function(r){  // Syntax for call back function 
			$scope.sum = r;	
		});
	};

}]);

app.service('calcService', ['$http','$log', function($http, $log){

		$log.log("Instantiating calcService...")

		this.getSum = function(a, b, cb){
		$log.log("Check entry to service...")	
		$http({
			url: 'http://localhost:4467/Sum?a=' + a + '&b=' + b,
			method: 'GET'
		}).then(function(resp){
			$log.log(resp.data);
			cb(resp.data);

		}, function(resp){
				$log.error("ERROR ocurred");	
		});
	};
}]);