app.service('service', function () {
  var beers = [];
  return {
    beers: beers
  };

  $scope.beers.push(newBeer);

  $scope.removeBeer = function (i) {
    $scope.beers.splice(i, 1)
};

})
