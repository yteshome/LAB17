var app = angular.module('richModule');

  app.directive('redditPost', function() {

      return {
        restrict: 'E',
        replace: false,
        templateUrl: 'reddit.html'
      }
    })
