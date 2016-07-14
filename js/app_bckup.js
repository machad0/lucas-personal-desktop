(function(angular) {
  'use strict';
var app = angular.module('CV', ['ngAnimate']);

app.controller('DisplayCtrl', [function() {
    var self = this;
    self.displayReadme = false;
    self.showWin2 = false;

}]);

app.controller('ControllerReadme', ['$scope', function($scope) {
  $scope.readme = {
    title: 'Readme.txt',
    body: ' Lostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                                                Lostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                Lorem ipsum dolor sit amet, consectetur'
  };
}])

app.directive('templateNotepad',['$document', function($document){
  return {
    templateUrl: 'templates/notepad.html',
     link: function(scope, element, attr) {
        var initX = 0, initY = 0, x = 0, y = 0;

        element.css({
         position: 'relative',
        
        });

        element.on('mousedown', function(event) {
          event.preventDefault();
          initX = event.pageX - x;
          initY = event.pageY - y;
          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
          y = event.pageY - initY;
          x = event.pageX - initX;
          element.css({
            top: y + 'px',
            left:  x + 'px'
          });
        }
        function mouseup() {
          $document.off('mousemove', mousemove);
          $document.off('mouseup', mouseup);
        }
      }  
  };
}]);
app.directive('templateFolder',['$document', function($document){
  return {
     templateUrl: 'templates/winfolder.html',
     link: function(scope, element, attr) {
        var initX = 0, initY = 0, x = 0, y = 0;

        element.css({
         position: 'relative',
        
        });

        element.on('mousedown', function(event) {
          event.preventDefault();
          initX = event.pageX - x;
          initY = event.pageY - y;
          $document.on('mousemove', mousemove);
          $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
          y = event.pageY - initY;
          x = event.pageX - initX;
          element.css({
            top: y + 'px',
            left:  x + 'px'
          });
        }
        function mouseup() {
          $document.off('mousemove', mousemove);
          $document.off('mouseup', mouseup);
        }
      }  
  };
}]);

})(window.angular);

