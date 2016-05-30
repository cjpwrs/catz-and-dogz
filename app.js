angular.module('rainingCatzAndDogz', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',{
      url:'/',
      templateUrl: "./templates/homeTemp.html"
    })
    .state('catz', {
      url: '/catz',
      templateUrl: 'templates/allCatzTemp.html',
      controller: 'catCtrl'
    })
    .state('dogz', {
      url: '/dogz',
      templateUrl: 'templates/allDogzTemp.html',
      controller: 'dogCtrl'
    })
    .state('catbyid', {
      url: '/catz/:id',
      templateUrl: 'templates/indCatzTemp.html',
      controller: 'catCtrl'
    })
    .state('dogbyid', {
      url: '/dogz/:id',
      templateUrl: 'templates/indDogsTemp.html',
      controller: 'dogCtrl'
    });

  $urlRouterProvider
  .otherwise('/');
});
