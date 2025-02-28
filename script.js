let playerName;
let currentQuestion = 0;
let correctAnswers = 0;

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6", "7"],
        answer: "4"
    },
    {
        question: "Who wrote 'To be, or not to be'?",
        options: ["Shakespeare", "Hemingway", "Fitzgerald", "Poe", "Dickens"],
        answer: "Shakespeare"
    }
];

function startGame() {
    playerName = document.getElementById('player-name').value;
    if (playerName) {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('quiz-page').style.display = 'block';
        showQuestion();
    } else {
        alert("Please enter your name.");
    }
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const question = questions[currentQuestion];
    
    questionElement.innerText = question.question;
    optionsElement.innerHTML = '';
    
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.innerText = option;
        optionElement.className = 'option';
        optionElement.onclick = () => checkAnswer(option);
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    if (selectedOption === question.answer) {
        correctAnswers++;
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';
    document.getElementById('result').innerText = `${playerName}, you got ${correctAnswers} out of ${questions.length} questions right.`;
}
