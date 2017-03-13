(function(){
  'use strict';
  angular.module('Interpolation',[])
  .controller('InterpolationController', InterpolationController);

  InterpolationController.$inject = ['$scope','$filter'];
  function InterpolationController($scope, $filter) {
    $scope.nom = "fabrice";
    $scope.stateOfBeing = "work";
    $scope.tripCost = 12000.00;
    $scope.sayMessage = function (){
      var msg = "Fabrice aime bien voyager!";
      var output = $filter('uppercase')(msg);
      return output;
    };
    $scope.tripFabrice = function (){
      $scope.stateOfBeing = "trip";
    }
  }
})();
