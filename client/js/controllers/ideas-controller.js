app.controller('ideasController', ['$scope', '$resource', function ($scope, $resource) {
  var Idea = $resource('/api/ideas');

  Idea.query(function (results) {
    $scope.ideas = results;
  });

  $scope.ideas = []

  $scope.createIdea = function () {
    var idea = new Idea();
    idea.name = $scope.ideaName;
    idea.description = $scope.ideaDescription;
    idea.$save(function (result) {
      $scope.ideas.push(result);
      $scope.ideaName = '';
      $scope.ideaDescription = '';
    });
  }
}]);