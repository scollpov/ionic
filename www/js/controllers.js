angular.module('starter.controllers', [])

.controller('StoreCtrl', function($scope, Items) {

  $scope.items = Items.allItems();
  $scope.carts = Items.allItemsInCart();

  $scope.totalPrice = function(){
    var totalPrice = 0;

    for (var i = 0; i < $scope.carts.length; i++) {
      totalPrice += $scope.carts[i].price * $scope.carts[i].units;
    }

    return totalPrice;
  };

  $scope.add = function(item) {
    Items.add(item);
  };

})

.controller('CartCtrl', function($scope, Items) {

  $scope.carts = Items.allItemsInCart();

  $scope.remove = function(item) {
    Items.remove(item);
  };

  $scope.message = function(){
    alert('It\'s a demo.');
  };
});
