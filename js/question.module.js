import { allQuestions,currentQuiz, } from "./index.js"

 const  questionsContainer = document.getElementById('questions-container')
export default class Questions{

    constructor(index){
        this.index=index;
        this.currentQusestion = allQuestions[index].question;
        this.category = allQuestions[index].category;
        this.correctAnswer = allQuestions[index].correct_answer;
        this.inCorrectAnswer = allQuestions[index].incorrect_answers;
        this.questionLength = allQuestions.length;
        // this.allChoice = [this.correctAnswer , ...this.inCorrectAnswer];
        this.allAnswers = this.allAnswers()

        this.answered =false;
        
        
    
    }

allAnswers(){
    return this.inCorrectAnswer.concat(this.correctAnswer).sort()
}

    displayData(){
        let cartona =`
        

          <div
      class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn"
    >
      <div class="w-100 d-flex justify-content-between">
        <span class="btn btn-category">${ this.category}</span>
        <span class="fs-6 btn btn-questions">${this.index + 1} of ${this.questionLength} Questions</span>
      </div>
      <h2 class="text-capitalize h4 text-center">${this.currentQusestion}</h2>  
      <ul class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
     ${ this.allAnswers.map((choice)=>`<li>${choice}</li>`).join(" ")}
      
      </ul>
      <h2 class="text-capitalize text-center score-color h3 fw-bold">
        <i class="bi bi-emoji-laughing"></i> 
        Score: ${currentQuiz.score}
      </h2>        
    </div>

        `;
        questionsContainer.innerHTML = cartona;
// const allChoice = document.querySelectorAll('.choice li');
const allChoices = document.querySelectorAll('.choices');
allChoices.forEach((choice) => {
  choice.addEventListener('click' , (eventInfo)=>{
    this.checkAnswer(eventInfo)

  })
});





}


checkAnswer(eventInfo){

  if(!this.answered){
    this.answered=true

    if(this.correctAnswer === eventInfo.target.innerHTML){
      eventInfo.target.classList.add(
        "correct","animate__animated","animate__flipIny"
      );
         currentQuiz.score ++
          console.log('correct')
        }else{
          eventInfo.target.classList.add(
            "wrong","animate__animated","animate__shakeX"
          );
      
        
          console.log('incorrect')
        }

        this.animatedQuestions(eventInfo.target)
  }
 
}

getNextQuestion(){
  this.index++
 if(this.index <allQuestions.length){

  const nextQuestions = new Questions(this.index)
  nextQuestions.displayData()
  return;
 }
 console.log('end Questions')
 questionsContainer.innerHTML=currentQuiz.endQuiz()
 const tryAgian =document.querySelector('.again')
 tryAgian.addEventListener(('click'),function(){
  window.location.reload()

 })
}

animatedQuestions(element){
  setTimeout(() => {
    element.closest('.question').classList.add('animated__animated','animated__bounceInLeft')
    setTimeout(() => {
      this.getNextQuestion()
    }, 500);
  }, 500*2);
}


    
}