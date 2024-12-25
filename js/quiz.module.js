
// https://opentdb.com/api.php?amount=10&category=27&difficulty=easy
export default class Quiz{

    constructor(amount,category,difficulty){
        this.amount= amount,
        this.category= category,
        this.difficulty= difficulty,
        this.score = 0;

    }

    // to get data from api
    async getQuestions(){
        // console.log("hellooooo")
        let request =await fetch(`https://opentdb.com/api.php?amount=${this.amount}&category=${this.category}&difficulty=${this.difficulty}`);
        let response = await request.json()
        // console.log(response.results);
        return  response.results
        
    }
endQuiz(){
    return`
        <div
      class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3"
    >
      <h2 class="mb-0">
      ${
        this.score == this.amount
          ? `Congratulations 🎉`
          : `Your score is ${this.score}`
      }      
      </h2>
      <button class="again btn btn-primary rounded-pill"><i class="bi bi-arrow-repeat"></i> Try Again</button>
    </div>
    `
}

}   