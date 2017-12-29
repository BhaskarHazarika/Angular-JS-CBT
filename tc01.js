var app = angular.module("app", []);
app.controller('emp', ['$scope','calcFactory', function($scope, calcFactory){
	$scope.a = 30;
	$scope.b = 40;

	$scope.doSum = function() {
//		$scope.sum = calcFactory.getSum($scope.a, $scope.b);
		calcFactory.getSum($scope.a, $scope.b, function(r){  // Syntax for call back function 
			$scope.sum = r;	
		});
	};

}]);

app.factory('calcFactory', ['$http','$log', function($http, $log){

		$log.log("Instantiating calcFactory...")

		var oCalcService = {};

		//Without call back function-- doSum fuction in controller wont proceed if 
		//service getSum returns take time
//		oCalcService.getSum = function (a,b){
//		$log.log("2nd function...")
//		return parseInt(a) + parseInt(b);
//		};

		//Using call back function to eliminate the response time
//		oCalcService.getSum = function(a, b, cb){
//		$log.log("2nd function...")
//		var s = parseInt(a) + parseInt(b);
//		cb(s);	
//		}
		oCalcService.getSum = function(a, b, cb){
		$log.log("Check entry...")	
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
		return oCalcService;
}]);