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

app.provider('calcService', function(){

		var baseUrl = '';
		this.config = function(url){
			baseUrl = url;
		};

		this.$get = ['$http', '$log', function($http,$log){
				$log.log("Instantiating calcService provider...");
				var oCalcService = {};
				oCalcService.getSum = function(a, b, cb){
					$http({
						url: baseUrl + '/Sum?a=' + a + '&b=' + b,
						method: 'GET'	
					}).then(function(resp){
						$log.log(resp.data);
						cb(resp.data);
					}, function(resp){
						$log.log("ERROR occured in connection");	
					});
				};
				return oCalcService;
		}];
	});	


app.config(['calcServiceProvider',function(calcServiceProvider) {
	calcServiceProvider.config('http://localhost:4467');
}]);

