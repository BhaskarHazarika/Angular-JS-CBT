var app = angular.module("app", []);

app.controller('emp', ['$scope', 'empService', function($scope, empService){
		empService.getEmployees(function(r){
				$scope.employee = r;

		})

}]);


app.service('empService',['$http', '$log', function($http, $log){

	this.getEmployees = function(cb){
		$http({
			url: 'http://localhost:3000/users/',
			method: 'GET'	
			}).then(function(resp){
				cb(resp.data);
		}, function(resp){
			$log.log("ERROR occured");
			debugger;
		});

	};

}]);