app.controller('ControllerReadme', ['$scope', function($scope) {
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
    $scope.toolsWindow = false;
    $scope.trayTools = false;


    $scope.popup = function() {
        if ($scope.toolsWindow == false) {
            $scope.toolsWindow = true;
        }
    }
    $scope.closeme = function() {
        if ($scope.toolsWindow == true) {
            $scope.toolsWindow = false;
        }
    }
}])
app.controller('ControllerEducation', ['$scope', function($scope) {
    $scope.educationWindow = false;
    $scope.trayEducation = false;

    $scope.popup = function() {
        if ($scope.educationWindow == false) {
            $scope.educationWindow = true;
        }
    }
    $scope.closeme = function() {
        if ($scope.educationWindow == true) {
            $scope.educationWindow = false;
        }
    }
}])
app.controller('ControllerExperiences', ['$scope', function($scope) {
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
        }
    }
    $scope.closeme = function() {
        if ($scope.experiencesWindow == true) {
            $scope.experiencesWindow = false;
        }
    }
}])
app.controller('ControllerLanguages', ['$scope', function($scope) {
    $scope.langsWindow = false;
    $scope.trayLangs = false;


    $scope.popup = function() {
        if ($scope.langsWindow == false) {
            $scope.langsWindow = true;
        }
    }
    $scope.closeme = function() {
        if ($scope.langsWindow == true) {
            $scope.langsWindow = false;
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
        
    };

    $scope.aboutWindow = false;
    $scope.trayAbout = false;

    $scope.popup = function() {
        if ($scope.aboutWindow == false) {
            $scope.aboutWindow = true;
        }
    }
    $scope.closeme = function() {
        if ($scope.aboutWindow == true) {
            $scope.aboutWindow = false;
        }
    }
}])
