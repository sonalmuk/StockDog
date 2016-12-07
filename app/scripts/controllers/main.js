'use strict';

/**
 * @ngdoc function
 * @name stockDogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stockDogApp
 */
angular.module('stockDogApp')
  .controller('MainCtrl', function ($scope,$location,WatchlistService) {
    // [1] populate watchlists for dynamic nav links
    $scope.watchlists=WatchlistService.query();

    //[2] Using the $location.path() function as a $watch expression

    $scope.$watch(function(){
      return $location.path();
    }, function(path){
       if(path.indexOf('watchlist')!==-1){
         $scope.activeView='watchlist';
       }else{
         $scope.activeView='dashboard';
       }
    });
  });
