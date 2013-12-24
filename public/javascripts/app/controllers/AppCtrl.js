angular
.module('Less2Css')
.controller('AppCtrl', [
  '$scope'
  , 'LessOptions'
  , function($scope, LessOptions) {
    $scope.opts = LessOptions.options;

    $scope.toggleDrawer = function(ev) {
      ev.preventDefault();
      $scope.drawerOpen = !$scope.drawerOpen;
    };
  }
]);
