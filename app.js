var app = angular.module('cashApp', []);

app.controller('cashRegister', function ($scope) {
  $scope.food = [{
    name: 'Pizza',
    price: 9.99,
    count: 0
  },{
    name: 'Salad',
    price: 5.99,
    count: 0
  },{
    name: 'Burger',
    price: 12.99,
    count: 0
  },{
    name: 'Cheeseburger',
    price: 12.99,
    count: 0
  }];

  $scope.receipt = {};
  $scope.receipt.receiptArray = [];
  $scope.receipt.addItem = function(food, array) {
    array.push({name: food.name, count: food.count+=1, price: (food.price * food.count)});
    return array;
  };
  $scope.cost = {total: 0, tax: 0};
});
