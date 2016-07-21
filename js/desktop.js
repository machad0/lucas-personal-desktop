app.controller('ControllerDesktop', ['$scope', function($scope) {
   
    $scope.trayReadme = false;
    $scope.traySkills = false;
    $scope.trayTools = false;
    $scope.trayEducation = false;
    $scope.trayExperiences = false;
    $scope.trayLangs = false;
    $scope.trayAboutme = false;
    
    $scope.classTrayReadme = "depressed"
    $scope.classTraySkills = "depressed"
    $scope.classTrayTools = "depressed"
    $scope.classTrayEducation = "depressed"
    $scope.classTrayExperiences = "depressed"
    $scope.classTrayLangs = "depressed"
    $scope.classTrayAboutme = "depressed"
    
    $scope.readmeMin = true;
    $scope.skillsMin = true;
    $scope.toolsMin = true;
    $scope.educationMin = true;
    $scope.experiencesMin = true;
    $scope.langsMin = true;
    $scope.aboutmeMin = true;
    
    
/* Read me */ 
    
    $scope.changeTrayReadme = function() {
    if($scope.classTrayReadme === "depressed"){
      $scope.classTrayReadme = "undprssd";
         $scope.readmeMin = false;
      } else {
            $scope.classTrayReadme = "depressed";
             $scope.readmeMin = true;
        }
    }
    $scope.CtrlTrayReadme = function() {
        if ($scope.trayReadme == false) {
            $scope.trayReadme = true;
        }
    }
    $scope.closeTrayReadme = function() {
        if ($scope.trayReadme == true) {
            $scope.trayReadme = false;
        }
    }
    $scope.miniReadme = function() {
         if ($scope.readmeMin == true) {
            $scope.readmeMin = false;
             $scope.classTrayReadme = "undprssd"; 
        }
    }
        
/* Skills */
    
    $scope.changeTraySkills = function() {
    if($scope.classTraySkills === "depressed"){
      $scope.classTraySkills = "undprssd";
         $scope.skillsMin = false;
      } else {
            $scope.classTraySkills = "depressed";
             $scope.skillsMin = true;
        }
    }
    $scope.CtrlTraySkills = function() {
        if ($scope.traySkills == false) {
            $scope.traySkills = true;
        }
    }
    $scope.closeTraySkills = function() {
        if ($scope.traySkills == true) {
            $scope.traySkills = false;
        }
    }
    $scope.miniSkills = function() {
         if ($scope.skillsMin == true) {
            $scope.skillsMin = false;
             $scope.classTraySkills = "undprssd"; 
        }
    }
    
/* Tools */
    
    $scope.changeTrayTools = function() {
    if($scope.classTrayTools === "depressed"){
      $scope.classTrayTools = "undprssd";
         $scope.toolsMin = false;
      } else {
            $scope.classTrayTools = "depressed";
             $scope.toolsMin = true;
        }
    }
    $scope.CtrlTrayTools = function() {
        if ($scope.trayTools == false) {
            $scope.trayTools = true;
        }
    }
    $scope.closeTrayTools = function() {
        if ($scope.trayTools == true) {
            $scope.trayTools = false;
        }
    }
    $scope.miniTools = function() {
         if ($scope.toolsMin == true) {
            $scope.toolsMin = false;
             $scope.classTrayTools = "undprssd"; 
        }
    }
    
/* Education */
    
    $scope.changeTrayEducation = function() {
    if($scope.classTrayEducation === "depressed"){
      $scope.classTrayEducation = "undprssd";
         $scope.educationMin = false;
      } else {
            $scope.classTrayEducation = "depressed";
             $scope.educationMin = true;
        }
    }
    $scope.CtrlTrayEducation = function() {
        if ($scope.trayEducation == false) {
            $scope.trayEducation = true;
        }
    }
    $scope.closeTrayEducation = function() {
        if ($scope.trayEducation == true) {
            $scope.trayEducation = false;
        }
    }
    $scope.miniEducation = function() {
         if ($scope.educationMin == true) {
            $scope.educationMin = false;
             $scope.classTrayEducation = "undprssd"; 
        }
    }
    
    /* Experiences */
    
    $scope.changeTrayExperiences = function() {
    if($scope.classTrayExperiences === "depressed"){
      $scope.classTrayExperiences = "undprssd";
         $scope.experiencesMin = false;
      } else {
            $scope.classTrayExperiences = "depressed";
             $scope.experiencesMin = true;
        }
    }
    $scope.CtrlTrayExperiences = function() {
        if ($scope.trayExperiences == false) {
            $scope.trayExperiences = true;
        }
    }
    $scope.closeTrayExperiences = function() {
        if ($scope.trayExperiences == true) {
            $scope.trayExperiences = false;
        }
    }
    $scope.miniExperiences = function() {
         if ($scope.experiencesMin == true) {
            $scope.experiencesMin = false;
             $scope.classTrayExperiences = "undprssd"; 
        }
    }
    
    
    /* Langs */
    
    $scope.changeTrayLangs = function() {
    if($scope.classTrayLangs === "depressed"){
      $scope.classTrayLangs = "undprssd";
         $scope.langsMin = false;
      } else {
            $scope.classTrayLangs = "depressed";
             $scope.langsMin = true;
        }
    }
    $scope.CtrlTrayLangs = function() {
        if ($scope.trayLangs == false) {
            $scope.trayLangs = true;
        }
    }
    $scope.closeTrayLangs = function() {
        if ($scope.trayLangs == true) {
            $scope.trayLangs = false;
        }
    }
    $scope.miniLangs = function() {
         if ($scope.langsMin == true) {
            $scope.langsMin = false;
             $scope.classTrayLangs = "undprssd"; 
        }
    }
    
    /* About Me */
    
    $scope.changeTrayAboutme = function() {
    if($scope.classTrayAboutme === "depressed"){
      $scope.classTrayAboutme = "undprssd";
         $scope.aboutmeMin = false;
      } else {
            $scope.classTrayAboutme = "depressed";
             $scope.aboutmeMin = true;
        }
    }
    $scope.CtrlTrayAboutme = function() {
        if ($scope.trayAboutme == false) {
            $scope.trayAboutme = true;
        }
    }
    $scope.closeTrayAboutme = function() {
        if ($scope.trayAboutme == true) {
            $scope.trayAboutme = false;
        }
    }
    $scope.miniAboutme = function() {
         if ($scope.aboutmeMin == true) {
            $scope.aboutmeMin = false;
             $scope.classTrayAboutme = "undprssd"; 
        }
    }
        
}])