app.controller('ControllerReadme', ['$scope', function($scope) {
    $scope.readme = {
        title: 'Readme.txt',
        body: ' Lostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                                                Lostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                Lorem ipsum dolor sit amet, consectetur'
    };

    $scope.readWindow = false;
   


    $scope.popup = function() {
        if ($scope.readWindow == false) {
            $scope.readWindow = true;
        }
    }
    $scope.closeme = function() {
        if ($scope.readWindow == true) {
            $scope.readWindow = false;
        }
    }
}])
app.controller('ControllerSkills', ['$scope', function($scope) {

    $scope.skillsWindow = false;
    $scope.traySkills = false;


    $scope.popup = function() {
        if ($scope.skillsWindow == false) {
            $scope.skillsWindow = true;
        }
    }
    $scope.closeme = function() {
        if ($scope.skillsWindow == true) {
            $scope.skillsWindow = false;
        }
    }

}])

app.controller('ControllerTools', ['$scope', function($scope) {
    $scope.tools = {
        title: 'Tools',
    };
    $scope.toolsWindow = false;
    $scope.trayTools = false;


    $scope.popup = function() {
        if ($scope.toolsWindow == false) {
            $scope.toolsWindow = true;
            $scope.trayTools = true;
        }
    }
    $scope.closeme = function() {
        if ($scope.toolsWindow == true) {
            $scope.toolsWindow = false;
            $scope.trayTools = false;
        }
    }
}])
app.controller('ControllerEducation', ['$scope', function($scope) {
    $scope.education = {
        title: 'Education',

    };

    $scope.educationWindow = false;
    $scope.trayEducation = false;

    $scope.popup = function() {
        if ($scope.educationWindow == false) {
            $scope.educationWindow = true;
            $scope.trayEducation = true;
        }
    }
    $scope.closeme = function() {
        if ($scope.educationWindow == true) {
            $scope.educationWindow = false;
            $scope.trayEducation = false;
        }
    }
}])
app.controller('ControllerExperiences', ['$scope', function($scope) {
    $scope.experiences = {
        title: 'Experiences',
    };
    $scope.tab = 1;
    $scope.setTab = function(newTab) {
        $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum) {
        return $scope.tab === tabNum;
    };
    $scope.experiencesWindow = false;
    $scope.trayExperiences = false;

    $scope.popup = function() {
        if ($scope.experiencesWindow == false) {
            $scope.experiencesWindow = true;
            $scope.trayExperiences = true;
        }
    }
    $scope.closeme = function() {
        if ($scope.experiencesWindow == true) {
            $scope.experiencesWindow = false;
            $scope.trayExperiences = false;
        }
    }
}])
app.controller('ControllerLanguages', ['$scope', function($scope) {
    $scope.langs = {
        title: 'Languages',

    };

    $scope.langsWindow = false;
    $scope.trayLangs = false;


    $scope.popup = function() {
        if ($scope.langsWindow == false) {
            $scope.langsWindow = true;
            $scope.trayLangs = true;
        }
    }
    $scope.closeme = function() {
        if ($scope.langsWindow == true) {
            $scope.langsWindow = false;
            $scope.trayLangs = false;
        }
    }


}])
app.controller('ControllerAboutme', ['$scope', function($scope) {

    $scope.classPosition = "natural";
    $scope.classMaxi = "unmax-win";
    $scope.changeClass = function() {


        if ($scope.classPosition === "natural") {
            $scope.classPosition = "changePosition";
        } else {
            $scope.classPosition = "natural";
        }
        
        if ($scope.classMaxi === "unmax-win") {
            $scope.classMaxi = "max-win";
        } else {
            $scope.classMaxi = "unmax-win";
        }
    /*$scope.classMaxi = "max-win";
    $scope.changeClass = function() {


        if ($scope.classMaxi === "max-win") {
            $scope.classMaxi = "unmax-win";
        } else {
            $scope.classMaxi = "max-win";
        }
        if ($scope.classPosition === "natural") {
            $scope.classPosition = "changePosition";
        } else {
            $scope.classPosition = "natural";
        }*/

    };

    $scope.aboutWindow = false;
    $scope.trayAbout = false;

    $scope.popup = function() {
        if ($scope.aboutWindow == false) {
            $scope.aboutWindow = true;
            $scope.trayAbout = true;
        }
    }
    $scope.closeme = function() {
        if ($scope.aboutWindow == true) {
            $scope.aboutWindow = false;
            $scope.trayAbout = false;
        }
    }
}])

 /* app.controller('ControllerGuru', function(){
    this.info = quotes[Math.floor(Math.random()*quotes.length)];
    this.pick = function(){
      this.info = quotes[Math.floor(Math.random()*quotes.length)];
    };
  });
  
  var quotes = [
    {
      text: "nem rola mano.",
      who: "birges"
    },
    {
      text: "datte bayo",
      who: "Naruto"
    },
   
    {
      text: "XDD",
      who: "xD"
    },
    {
      text: "foo.'",
      who: "bar"
    }
  ];
  */

