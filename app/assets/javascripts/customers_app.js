var app = angular.module('customers',[]); 

app.controller("CustomerSearchController", [ 
          '$scope','$http',
  function($scope , $http) {                         

    var page = 0;

    $scope.customers = [];
    $scope.search = function(searchTerm) {   
      $http.get("/customers.json",  
                { "params": { "keywords": searchTerm, "page": page } }
      ).success(
        function(data,status,headers,config) { 
          $scope.customers = data;
      }).error(
        function(data,status,headers,config) {
          alert("There was a problem: " + status);
        });
    }

    $scope.previousPage = function() {
      if (page > 0) {
        page = page - 1;
        $scope.search($scope.keywords);
      }
    }
    $scope.nextPage = function() {
      page = page + 1;
      $scope.search($scope.keywords);
    }
  }
]);
