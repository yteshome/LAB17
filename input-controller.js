var app = angular.module('richModule');

  app.controller('inputCtrl', function($scope, reddFabrica) {

  $scope.reddQuest = function(subReddit) {
    reddFabrica.setJSON(subReddit)
  }
})
