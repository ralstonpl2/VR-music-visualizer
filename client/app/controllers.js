angular.module('VRMusicApp')
  .controller('MusicController', function($scope, builder, $location, Spotify){
    $scope.home = function(){
      $location.url('/');
    }
    $scope.visitHappy = function(event){
      var button = event.currentTarget;
      $location.url('/happy');
    }
    $scope.visitEnergy = function(event){
          var button = event.currentTarget;
          $location.url('/energy');
    }
    $scope.visitRelax = function(event){
          var button = event.currentTarget;
          $location.url('/relax');
    }

    var url = "https://api.spotify.com/v1/tracks/?ids=0eGsygTp906u18L0Oimnem,1lDWb6b6ieDQ2xT7ewTC3G,3xEqegrcyQtfhWeEMnDyCG,3hB5DgAiMAQ4DzYbsMq1IT,3xEqegrcyQtfhWeEMnDyCG,3pzjHKrQSvXGHQ98dx18HI,2iuZJX9X9P0GKaE93xcPjk,7oK9VyNzrYvRFo7nQEYkWN,3pVbA69fLbVMwEv7ESCTm5";
    var url2 = "https://api.spotify.com/v1/tracks/?ids=4ZOv9mx6Lz7RRaBFi5UNaE,0HFUgGLJNa738pJ1BFf9mV,4YFQvzh4KO7Fom7PLsYbEc,3e3ev8fQxjVvY4hJxSGEHw,66MCswIvZgpVFesgSpnAjO,0OdgYCYxRaPyHsuPg0QgCe,7GUZnr2WuSJn4BWRUN9gtd,4NqnsZL9lICSjCwvAaTAr8,7hZzEX9PRJql3jpQDneRjh";

    $.get(url, function(data) {
          $scope.tracks = builder.spotifyAdapter(data.tracks);
          
        })

    $.get(url2, function(data) {
        console.log('data', data)
            $scope.tracksRelax = builder.spotifyAdapter(data.tracks);
            
          });

    });

    