angular.module('VRMusicApp', ['ngRoute', 'ngResource', 'spotify'])

  .config(function($routeProvider, $locationProvider){
     $routeProvider
        .when('/', {
            controller: 'MusicController',
            templateUrl: 'views/menu.html'
        })
        .when('/happy', {
          controller: 'MusicController',
          templateUrl: 'views/music-scene.html'
        })
        .when('/energy', {
          controller: 'MusicController',
          templateUrl: 'views/music-scene-energy.html'
        })
        .when('/relax', {
          controller: 'MusicController',
          templateUrl: 'views/music-scene-relax.html'
        })
      // $locationProvider.html5Mode(true)
    })