var canvas;
var gameState = 0
var contestantCount
var allContestants
var distance = 0
var contestant
var questions
var database


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount===4){

   quiz.update(1)
   
   

  }

  if(gameState===1){

    background("turquoise")
    var results = createElement('h1')
          results.html("RESULTS OF THE QUIZ")
          results.position(250,200)

    var note = createElement('h3')
    note.html("NOTE:Contestants who answered correct are highlighted in green")
    note.position(150,350);

    quiz.play();


  }

  
  

  
}
