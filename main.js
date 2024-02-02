var app=angular.module('myApp',[]);

app.controller("mainCtrl",function($scope,$http){
    



      $http( {
        url: 'https://movies-api14.p.rapidapi.com/movies',
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c89e3ad769msh4b154de27beead3p1d2f5djsn7c266e7e05a5',
            'X-RapidAPI-Host': 'movies-api14.p.rapidapi.com'
        }
        }).then 
        (function successCallback(response) {
            $scope.name = response.data.Title;
            response=JSON.stringify(response.data.movies);
            response=JSON.parse(response);
            console.log(response)
            $scope.movies=response;
            },
            function errorCallback(error) {
                console.log("Error occurred while fetching movie details.");
                });
      
     $scope.getM=function(){
        $scope.releaseDateFilter = function(movie) {
            var releaseDate = new Date($scope.releaseDate);
            var toReleaseDate = new Date($scope.toreleaseDate);
            var movieReleaseDate = new Date(movie.release_date);
            return releaseDate <= movieReleaseDate && movieReleaseDate <= toReleaseDate;
          }
    
        }
    });

