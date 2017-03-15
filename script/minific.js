// (function () {
// 'use strict';
//
// angular.module('MiniFic', [])
// .controller('MiniFicController', MiniFicController);
// MiniFicController.$inject = ['$scope', '$filter'];
// function MiniFicController ($scope,$filter){
//   $scope.name = "fabrice";
//
//   $scope.upper = function () {
//     var upCase = $filter('uppercase');
//     $scope.name = upCase($scope.name);
//   };
// }
//
// })
// ();
/*avec minification le code devient*/
!function(){"use strict";function n(n,e){n.name="fabrice",n.upper=function(){var i=e("uppercase");n.name=i(n.name)}}angular.module("MiniFic",[])
.controller("MiniFicController",n),n.$inject=["$scope","$filter"]}();
