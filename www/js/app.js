// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'template/tabs.html'
  })

  .state('tab.store', {
    url: '/store',
    views: {
      'tab-store': {
        templateUrl: 'template/tab-store.html',
        controller: 'StoreCtrl'
      }
    }
  })

  .state('tab.cart', {
    url: '/cart',
    views: {
      'tab-cart': {
        templateUrl: 'template/tab-cart.html',
        controller: 'CartCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/store');
});
