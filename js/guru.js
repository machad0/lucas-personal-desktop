  app.controller('ControllerGuru',['$scope', function($scope) {
    this.words = quotes[Math.floor(Math.random()*quotes.length)];
    this.pick = function(){
      this.words = quotes[Math.floor(Math.random()*quotes.length)];
    };
        $scope.intro = true;
        $scope.text = false;
        $scope.HideText = function() {
        if($scope.text == false){
            $scope.text = true;
            $scope.intro = false; 
        }
      }
        $scope.guruWindow = false;
        $scope.popup = function() {
        if ($scope.guruWindow == false) {
            $scope.guruWindow = true;   
        }
      }
  }]);
  
  var quotes = [
    {
      text: '"If you work hard, you can break barriers..."',
      who: "-Kim Kardashian"
    },
    {
      text: '"People create programs to direct processes. In effect, we conjure the spirits of the computer with our spells"',
      who: "-The Structure & Interpretation of Computer Programs"
    },
    {
      text: "Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn",
      who: ""
    },
     {
      text: '"So stark und doch verletzbar. Das Volk, der Mensch Der Wald, Der Baum"',
      who: ""
    },
     {
      text: '"All you need is ignorance and confidence; then success is sure."',
      who: "-Mark Twain"
    },
     {
      text: '"Everything that irritates us about others can lead us to an understanding of ourselves."',
      who: "-Carl Jung"
    },
     {
      text: '"I bent over, took up a handful of sand, let it fall silently a little further on and said in a low voice: I am modifying the Sahara."',
      who: "-Jorge Luis Borges"
    },
     {
      text: '"Even though my tongue is at rest and my throat silent, I can sing as much as I wish."',
      who: "-Saint Augustine"
    },
     {
      text: '"It’s part of the shape of the Universe. I only have to talk to somebody and they begin to hate me."',
      who: "-Douglas Adams"
    },
      {
      text: '"The imagination is a muscle. If it is not exercised, it atrophies."',
      who: "-Neil Gaiman"
    },
      {
      text: '"People populate the darkness; with ghosts, with gods, with electrons, with tales."',
      who: "-Neil Gaiman"
    },
     {
      text: '"Gods die. And when they truly die they are unmourned and unremembered. Ideas are more difficult to kill than people, but they can be killed, in the end."',
      who: "-Neil Gaiman"
    },
     {
      text: '"I do not fear computers. I fear the lack of them."',
      who: "-Isaac Asimov"
    },
     {
      text: '"Intelligence is an accident of evolution, and not necessarily an advantage."',
      who: "-Isaac Asimov"
    },
      {
      text: '"I preferred going to sleep, which is an interim way of dying."',
      who: "-Machado de Assis"
    },
      {
      text: '"Maturity, one discovers, has everything to do with the acceptance of not knowing."',
      who: "-Mark Z. Danielewski"
    },
      {
      text: '"Why did god create a dual universe? So he might say "Be not like me." I am alone. And it might be heard"',
      who: "-Mark Z. Danielewski"
    } 
  ];
  