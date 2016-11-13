angular.module('starter.services', [])

.factory('Items', function() {

  var items = [{
    id: 0,
    name: 'Avid C|24',
    description: 'Pro Tools Control Surface with 24 Touch-sensitive Faders',
    stock: 3,
    img: 'img/avid.jpg',
    price: 9995.95
  }, {
    id: 1,
    name: 'Slate Media Technology Raven MTi2 Multi-touch',
    description: 'Multi-touch Control Surface with 27" LED-backlist Screen',
    stock: 7,
    img: 'img/muliTouch.jpg',
    price: 999.05
  }, {
    id: 2,
    name: 'Avid Console Trade-in Upgrade from any Console to C|24',
    description: 'Hardware Exchange/Upgrade from Any Qualifying Mixer to 24-channel c|24 Control Surface',
    stock: 1,
    img: 'img/console.jpg',
    price: 6399.15
  }, {
    id: 3,
    name: 'Avid Pro Tools | Dock',
    description: 'iPad Dock for Pro Tools with 16 Soft Keys',
    stock: 8,
    img: 'img/avidPro.jpg',
    price: 1199.20
  }, {
    id: 4,
    name: 'Slate Media Technology RAVEN MTX Mk2 Multi-touch',
    description: 'Multi-touch Mixer with 46" LED Screen',
    stock: 10,
    img: 'img/raven.jpg',
    price: 9999.75
  }];

  var carts = [];

  return {
    allItems: function() {
      return items;
    },

    allItemsInCart: function(){
      return carts;
    },

    remove: function(cartItem) {
      if (cartItem.units>1) cartItem.units -= 1;
      else carts.splice(carts.indexOf(cartItem), 1);

      for (var i = 0; i < items.length; i++) {
        if (items[i].id == cartItem.id) {
          items[i].stock += 1;
        }
      }
    },

    add: function(item) {
      item.stock -= 1;

      for (var i = 0; i < carts.length; i++) {
        if (carts[i].id == item.id) {
          carts[i].units += 1;
          return;
        }
      }

      var cartItem = {id: item.id, name: item.name, description: item.description, units: 1, img: item.img, price: item.price};
      carts.push(cartItem);
    }
  };
});
