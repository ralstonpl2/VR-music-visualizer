angular.module('VRMusicApp')
    .service('builder', function () {
        // Turn Spotify JSON into DOM Album
        this.spotifyAdapter = function (tracks) {
            var allTracks = [],
                count = tracks.length;
            for (var i in tracks) {
                console.log(tracks);
                var thumbnail = tracks[i].album.images[0].url,
                    posX = (0 + 3 * Math.cos(2 * i * Math.PI / count )),
                    posZ = (0 + 3 * Math.sin(2 * i * Math.PI / count )),
                    preview_url = tracks[i].preview_url,
                    track = {
                        posx: posX,
                        posy: 1.5,
                        posz: posZ,
                        thumbnail: thumbnail,
                        song: preview_url
                    }  
                allTracks.push(track)                 
            }
            return allTracks
        }
        // Count songs returned
        this.count = function (array) {
            return array.length
        }
    });