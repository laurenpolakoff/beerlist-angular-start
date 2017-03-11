app.controller('beersCtrl', function ($scope, service) {
  $scope.beers = service.beers;

  $scope.addBeer = function () {
    var newBeer = {
      name: $scope.name,
      style: $scope.style,
      abv: $scope.abv,
      image: $scope.image,
      rating: $scope.rating
    };

  $scope.updateRating = function (i, newRating) {
    $scope.beers[i].rating = newRating
  };

  $scope.avgRating
})
