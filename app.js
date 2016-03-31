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
  $scope.cost = {total: 0, tax: 0};
  $scope.receipt.addItem = function(food, array) {
    $scope.cost.total += food.price;
    $scope.cost.tax += (food.price * 0.0725);

    if (array.indexOf(food) !== -1) {
      food.count++;
    } else {
      food.count++;
      array.push(food);
    }
    return array;
  };
});
