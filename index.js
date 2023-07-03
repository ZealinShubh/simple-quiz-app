const quizdb=[
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello to my world",
        b: "Hypertext Makeup Language",
        c: "Hello Texts Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: Javascript is an _______ language?",
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Procedural",
        d: "None of the above",
        ans: "ans1"
    },
    {
        question: "Q3: Which of the following is correct about JavaScript?",
        a: "JavaScript is an Object-Based language",
        b: "JavaScript is Assembly-language",
        c: "JavaScript is an Object-Oriented language",
        d: "JavaScript is a High-level language",
        ans: "ans1"
    },
    {
        question: "Q4: How can a datatype be declared to be a constant type?",
        a: "const",
        b: "var",
        c: "let",
        d: "constant",
        ans: "ans1"
    }
    // {
    //     question: "Q5: Which of the following is not javascript data types?",
    //     a: "Null type",
    //     b: "Undefined type",
    //     c: "Number type",
    //     d: "All of the above",
    //     ans: "ans4"
    // },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');

let questionCount = 0;
let score=0;

const loadQuestion =()=>{
    const questionlist = quizdb[questionCount];

    question.innerHTML = questionlist.question;

    option1.innerHTML = questionlist.a;
    option2.innerHTML = questionlist.b;
    option3.innerHTML = questionlist.c;
    option4.innerHTML = questionlist.d;
}
loadQuestion();

const getCheckAnswer= () =>{
    let answer;
    answers.forEach((currAnselem)=>{
        if(currAnselem.checked){
            answer =currAnselem.id;
        }
    });
    return answer;
}

const deselectAll = () =>{
    answers.forEach((curAnselem)=> curAnselem.checked = false);
}

submit.addEventListener('click', ()=>{
    const checkedanswer = getCheckAnswer();
    console.log(checkedanswer);

    if (checkedanswer === quizdb[questionCount].ans) {
        score++;
    }
    
    questionCount++;

    deselectAll();

    if(questionCount < quizdb.length){
        loadQuestion();
    }else{
        showscore.innerHTML =`
            <h3> You scored ${score}/${quizdb.length}</h3>
            <button class="btn" onclick="location.reload()">Retake Test</button>
        `;
        showscore.classList.remove('scorearea');
    }
});