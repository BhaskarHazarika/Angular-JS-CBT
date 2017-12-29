var app = angular.module("app", []);

app.controller('emp', ['$scope', 'empService','$filter', function($scope, empService, $filter){
	$scope.doSearch = function(){
		empService.findEmpById($scope.id, function(r){
			$scope.name = r.name;
			$scope.email = r.email;
			$scope.password = r.password;

//			$scope.isSalAbove7K = parseInt(r.sal) > 7000;    --used in ng-if.show,hide
//			$scope.nameFilter = $filter("uppercase")(r.name);  //-- 2nd way of implementing filters
		});

	};

}]);


app.service('empService',['$http', '$log','$filter', function($http, $log, $filter){

	this.findEmpById = function(id, cb){
		$http({
			url: 'http://localhost:3000/users/' + id,
			method: 'GET'	
			}).then(function(resp){
				rep.data.name = $filter("uppercase")(rep.data.name);
				cb(resp.data);
		}, function(resp){
			$log.log("ERROR occured");
			debugger;
		});

	};

}]);