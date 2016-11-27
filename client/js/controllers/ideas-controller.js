app.controller('ideasController', ['$scope', '$resource', function ($scope, $resource) {
  var Idea = $resource('/api/ideas');

  Idea.query(function (results) {
    $scope.ideas = results;
  });

  $scope.ideas = []

  $scope.createIdea = function () {
    var idea = new Idea();
    idea.projectName = $scope.projectName;
    idea.studentName = $scope.studentName;
    idea.projectDescription = $scope.projectDescription;
    idea.studentEmail = $scope.studentEmail;
    idea.projectURL = $scope.projectURL;
    idea.$save(function (result) {
      $scope.ideas.push(result);
      $scope.projectName = '';
      $scope.studentName = '';
      $scope.projectDescription = '';
      $scope.studentEmail = '';
      $scope.projectURL = '';
    });
  }
}]);
