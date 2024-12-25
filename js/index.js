// 

import Questions from "./question.module.js"
import Quiz from "./quiz.module.js"




// ========> Get HTML Element <======== 
const  categoryMenu = document.getElementById('categoryMenu')
const  difficultyOptions = document.getElementById('difficultyOptions')
const  questionsNumber = document.getElementById('questionsNumber')
const  startQuizBtn = document.getElementById('startQuiz')
const  quizOptions = document.getElementById('quizOptions')
 export let currentQuiz   ;

export  let allQuestions =[];
startQuizBtn.addEventListener('click',async function(){
    let category = categoryMenu.value;
    let difficulty = difficultyOptions.value;
    let amount = questionsNumber.value;
   

    
     currentQuiz= new Quiz(amount,category,difficulty)
    allQuestions = await currentQuiz.getQuestions()
  

    
    // console.log(allQuestions ,'all questions' );
    quizOptions.classList.replace('d-flex','d-none')

    let myQuestions =new Questions(0)


myQuestions.displayData();
    
    
    
    
})