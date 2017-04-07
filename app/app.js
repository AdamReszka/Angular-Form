var myNinjaApp = angular.module('myNinjaApp', []);

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

  $scope.message = "udało się";

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
