'use strict';
var routerApp = angular.module('routerApp');
routerApp.controller('IndexController', ['$scope', function($scope) {

  //open panels
  $scope.toggle = function(num) {
    if (num === 1) {
      $scope.toggleVar1 = !$scope.toggleVar1;
    } else {
      $scope.toggleVar2 = !$scope.toggleVar2;
    }
  };

  //enter and submit user comments
  $scope.enter_comment = false;
  $scope.usercomments = [];
  $scope.input = {
    name: "",
    comment: "",
    date: new Date().toISOString()
  };

  $scope.submitComment = function() {
    if (!$scope.input.comment || !$scope.input.name) {
      $scope.enter_comment = true;
    } else {
      $scope.usercomments.push($scope.input);
      $scope.input = {
        name: "",
        comment: "",
        date: new Date().toISOString()
      };
      $scope.enter_comment = false;
    }
  };

  //remove individual comments
  $scope.remove = function(index) {
    $scope.usercomments.splice(index, 1);
  };

}])

.controller('FoodController', ['$scope', 'foodFactory', function($scope, foodFactory) {

  //create a menu
  $scope.tab = 1;
  $scope.filtText = '';
  $scope.foods = foodFactory.getFoods();

  //menu selections
  $scope.select = function(setTab) {
    $scope.tab = setTab;
    if (setTab === 2) {
      $scope.filtText = "appetizer";
    } else if (setTab === 3) {
      $scope.filtText = "main";
    } else if (setTab === 4) {
      $scope.filtText = "dessert";
    } else {
      $scope.filtText = "";
    }
  };

  $scope.isSelected = function(checkTab) {
    return ($scope.tab === checkTab);
  };

}])

.controller('PhotoController', ['$scope', 'photoFactory', function($scope, photoFactory) {

  //create a photo slideshow
  $scope.photos = photoFactory.getPhotos();
  var length = $scope.photos.length;
  var current_index = 0;
  $scope.photo = photoFactory.getPhoto(current_index);

  //next button
  $scope.next = function() {
    var next_index = current_index + 1;
    if (current_index < length - 1) {
      $scope.photo = photoFactory.getPhoto(next_index);
      current_index++;
    }
  };

  //previous button
  $scope.previous = function() {
    var previous_index = current_index - 1;
    if (current_index > 0) {
      $scope.photo = $scope.photo = photoFactory.getPhoto(previous_index);
      current_index--;
    }
  };
}]);