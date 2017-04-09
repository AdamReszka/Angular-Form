var myNinjaApp = angular.module('myNinjaApp', ['ngRoute']);

myNinjaApp.config(['$routeProvider', function($routeProvider){

  $routeProvider
    .when('/home', {
      templateUrl: 'views/home.html'
    })
    .when('/directory', {
      templateUrl: 'views/directory.html',
      controller: 'NinjaController'
    }).otherwise({
      redirectTo: '/home'
    });
}]);

myNinjaApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){


  $scope.removeNinja = function(ninja){
    var removedNinja = $scope.ninjas.indexOf(ninja);
    $scope.ninjas.splice(removedNinja, 1);
  }

  $scope.addNinja = function(){
    $scope.ninjas.push({
      name: $scope.newNinja.name,
      belt: $scope.newNinja.belt,
      rate: parseInt($scope.newNinja.rate),
      available: true
    });

    $scope.newNinja.name = "";
    $scope.newNinja.belt = "";
    $scope.newNinja.rate = "";
  };

  $scope.ninjas = [
    {
      name: "Yoshi",
      belt: "Green",
      rate: 50,
      available: true
    },
    {
      name: "Crystal",
      belt: "Yellow",
      rate: 30,
      available: true
    },
    {
      name: "Ryu",
      belt: "Orange",
      rate: 10,
      available: false
    },
    {
      name: "Shaun",
      belt: "Black",
      rate: 1000,
      available: true
    }
  ];

}]);
