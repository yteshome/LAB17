var app = angular.module('richModule');

app.factory('reddFabrica', function($http) {

  var posts = [];

  function setJSON(subReddit) {
    $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/' + subReddit + '.json'
    }).then(function successfulCallback(response) {

      posts = response.data.data.children;
        console.log(posts);
    });
  }

  function getJSON() {
    return posts;
  }

  return {
    setJSON: setJSON,
    getJSON: getJSON
  }

});
