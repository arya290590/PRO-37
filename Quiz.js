class Quiz {

    constructor(){}
    
        getState(){
            var gameStateRef  = database.ref('gameState');
            gameStateRef.on("value",function(data){
               gameState = data.val();
            })
        
          }

          update(state){
            database.ref('/').update({
              gameState: state
            });
          }


          async start(){
            if(gameState === 0){
              contestant = new Contestant();
              var contestantCountRef = await database.ref('contestantCount').once("value");
              if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
              }
              questions = new Questions()
              questions.display();
              
            }
          }

          play(){

          

          Contestant.getContestantInfo();
          

          if(allContestants !== undefined){
            var display_position = 260;
            for(var plr in allContestants){
                var correctAnswer = "3";
              if (correctAnswer === allContestants[plr].answer)
                fill("green")
              else
                fill("red");
      
              display_position+=20;
              textSize(15);
              text(allContestants[plr].name + ": " + allContestants[plr].answer, 240,display_position)
            }
          }

          }


    

display(){



    
}


}