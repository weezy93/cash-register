var app = angular.module('cashApp', {});

app.controller('cashRegister', function ($scope) {
  $scope = {};
  $scope.food = {};
  $scope.food.pizza = {};
  $scope.food.salad = {};
  $scope.food.burger = {};
  $scope.food.cheeseburger = {};
  $scope.receipt = {};
  $scope.total = {};
});
