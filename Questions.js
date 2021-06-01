class Questions{

constructor(){

    this.input = createInput('Name')

    this.Input = createInput('Correct Option Number')

    this.submit_button = createButton('Submit')

    this.reset_button = createButton('Reset DataBase Value')
    
    this.reload_page_button = createButton('Reload Page')
}





display(){

    var greeting = createElement('h2')
    greeting.html("MyQuiz Game")
    greeting.position(350, 0)

    this.input.position(200,250)

    this.Input.position(450,250);



    var QUESTION = createElement('h3')
    QUESTION.html("Question :- What starts and ends with letter 'E' but has only one letter")
    QUESTION.position(150,80)

    var option1 = createElement('h3')
    option1.html("1:Everyone")
    option1.position(150,100)

    var option2 = createElement('h3')
    option2.html("2:Envelope")
    option2.position(150,120)

    var option3 = createElement('h3')
    option3.html("3:Estimate")
    option3.position(150,140)

    var option4 = createElement('h3')
    option4.html("4:Example")
    option4.position(150,160)


    this.submit_button.position(380,280);

    this.submit_button.mousePressed(()=>{
        this.input.hide();
        this.submit_button.hide();
        this.Input.hide();
        contestant.name = this.input.value();
        contestant.answer = this.Input.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        
      });

   this.reset_button.position(15,15)
      
   this.reset_button.mousePressed(()=>{

   contestant.updateCount(0)
   quiz.update(0)
   



   })

   this.reload_page_button.position(15,45);

   this.reload_page_button.mousePressed(()=>{

    location.reload();

   })








}



}