const allQuestion = [
    {
        questions: "Which is largest animal in the world",
        answer : [
            {text:'shark',correct:true},
            {text:'elephant',correct:false},
            {text:'dolphin',correct:false},
            {text:'lion',correct:false},

        ]
    },
    {
        question: "what is the national game of pakistan",
        answer : [
            {text:'cricket',correct:false},
            {text:'hockey',correct:true},
            {text:'foatball',correct:false},
            {text:'cricket',correct:false},

        ]
    }, {
        question: "Which is largest city od pakistan",
        answer : [
            {text:'islamabad',correct:true},
            {text:'karachi',correct:false},
            {text:'lahore',correct:false},
            {text:'multan',correct:false},

        ]
    },
]



let containerElement = document.querySelectorAll(".container")[0]
let quizEl = document.querySelectorAll(".quiz")[0]

let answareElement = document.querySelectorAll("#answare-buttons")[0]
let questionElement = document.querySelectorAll("#question")[0]
let nextButtonElement = document.querySelectorAll("#next-btn")[0]


let score = 0
let currentQuestionIndex = 0

function startQuiz() {
    score = 0
    currentQuestionIndex = 0
    nextButtonElement.innerHTML = 'Next'
    showQuiz()

}


function showQuiz(){
    reset()
let currentQuestion = allQuestion[currentQuestionIndex]
let qNo =  currentQuestionIndex + 1
// console.log(qNo,questionIndex.questi
console.log(qNo,currentQuestion.questions)
questionElement.innerHTML = `${qNo} ${currentQuestion.questions}`

console.log(currentQuestion)

currentQuestion.answer.forEach((answers)=>{
    let button = document.createElement('BUTTON')
    button.innerHTML = answers.text
    button.classList.add("btn")
    answareElement.appendChild(button)
console.log(answers.correct)
    if(answers.correct){
        button.dataset.correct = answers.correct
    }

    button.addEventListener("click",selectAnser)
})


}


const  reset = () => {
    nextButtonElement.style.display = "none"
    while(answareElement.firstChild){
      answareElement.removeChild(answareElement.firstChild)
    }
}

function selectAnser(e){
    let selectBtn = e.target
console.log(selectBtn)
    let isCorrect = selectBtn.dataset.correct === "true"
    if(isCorrect){
        selectBtn.classList.add("correct")
        score++
    }
    else{
        selectBtn.classList.add("incorrect")
    }

    Array.from(answareElement.children).forEach((button)=>{
      if(button.dataset.correct === true){
        button.classList.add("correct")
      }

    })
    nextButtonElement.style.display = "block"
}


function showScore(){
    reset()
    questionElement.innerHTML = `${score} out of ${allQuestion.length}`
    nextButtonElement.style.display = 'block'
    nextButtonElement.innerHTML = 'playagain'
}




function handleBtn(){
    currentQuestionIndex++
   if(currentQuestionIndex < allQuestion.length){
       showQuiz()
   }
   else{
    showScore()
   }

}





   nextButtonElement.addEventListener('click',()=>{
    if(currentQuestionIndex  < allQuestion.length){
        handleBtn()
    }
    else{
        startQuiz()
    }
   })





showQuiz()











// function showScore(){
//     reset()
//     questionElement.innerHTML = `${score} out of ${allQuestion.length}`
//     nextButtonElement.style.display = 'none'
//     nextButtonElement.innerHTML = 'playagain'
// }

// function handleBtn(){
//     questionIndex++
//    if(questionIndex < allQuestion.length){
//        showQuiz()
//    }
//    else{
//     showScore()
//    }


//    nextButtonElement.addEventListener('click',()=>{
//     if(questionIndex < allQuestion.length){
//         handleBtn()
//     }
//     else{
//         startQuiz()
//     }
//    })
// }


// showQuiz()