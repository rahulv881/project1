( function(){
var app = angular.module("apiViewer",[]);

var MainController = function($scope, $http ){

      var onGetComplete = function(response){

        $scope.customers = response.data.data;

      };

      $scope.message="Working";
      $http.get("http://dummy.restapiexample.com/api/v1/employees")
            .then(onGetComplete);
};

app.controller("MainController", ["$scope", "$http", MainController]);
}());
