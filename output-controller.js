var app = angular.module('richModule');

app.controller('outputCtrl', function($scope, reddFabrica) {
    $scope.posts = reddFabrica.getJSON();
});
