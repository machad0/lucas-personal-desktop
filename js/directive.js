

app.directive('templateNotepad', ['$document', function($document){
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
app.directive('templateSkills', ['$document', function($document){
  return {

    templateUrl: 'templates/skills.html',

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
app.directive('templateTools',['$document', function($document){
  return {
      
     templateUrl: 'templates/tools.html',
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
app.directive('templateEducation',['$document', function($document){
  return {
       templateUrl: 'templates/education.html',
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
app.directive('templateExperiences',['$document', function($document){
 return {
       templateUrl: 'templates/experiences.html',
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
app.directive('templateLanguages',['$document', function($document){
 return {
       templateUrl: 'templates/languages.html',
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
app.directive('templateAbout',['$document', function($document){
  return {
       templateUrl: 'templates/about.html',
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
app.directive('templateGuru', ['$document', function($document){
  return {

    templateUrl: 'templates/guru.html',
      
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
/*
app.directive('templateMinesweeper', ['$document', function($document){
  return {

    templateUrl: 'templates/minesweeper.html',

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
}]);*/