 /* ================================
   MOBILE MENU
================================ */

function toggleMenu() {

    const navigation =
        document.querySelector(".navigation");

    navigation.classList.toggle("active");

}


/* ================================
   CULTURE TOPICS
================================ */

function showTopic(topic) {

    const modal =
        document.getElementById("topic-modal");

    const title =
        document.getElementById("modal-title");

    const text =
        document.getElementById("modal-text");


    const topics = {

        "Traditions":
            "Kazakh culture has many traditions and ceremonies. Tusau Kesu, Besik Toi, Shashu and Bata are examples of customs connected with family, respect and community.",

        "National Cuisine":
            "Kazakh cuisine developed in connection with the nomadic lifestyle. Famous traditional foods include Beshbarmak, Baursak, Kazy, Kumys and Shubat.",

        "Music":
            "The dombra is one of the most recognizable symbols of Kazakh music. Kuy is an important instrumental musical tradition often performed on the dombra.",

        "Traditional Clothing":
            "Traditional Kazakh clothing includes beautiful garments decorated with ornaments and embroidery. Clothing could show age, identity and social position.",

        "Hospitality":
            "Hospitality is an important Kazakh value. Guests are traditionally welcomed with food, tea, conversation and respect.",

        "Holidays":
            "Nauryz is one of the most important celebrations. It represents spring, renewal, friendship and new beginnings."

    };


    title.textContent = topic;

    text.textContent =
        topics[topic] ||
        "Information about this cultural topic will be added soon.";

    modal.classList.add("active");

}


/* ================================
   CLOSE MODAL
================================ */

function closeModal() {

    const modal =
        document.getElementById("topic-modal");

    modal.classList.remove("active");

}


window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("topic-modal");

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


/* ================================
   VOCABULARY PRACTICE
================================ */

function vocabAnswer(isCorrect) {

    const result =
        document.getElementById("vocab-result");

    if (isCorrect) {

        result.textContent =
            "✓ Correct! Hospitality means friendly and generous treatment of guests.";

        result.style.color = "#2e8b57";

    } else {

        result.textContent =
            "✗ Not quite. Try again!";

        result.style.color = "#c0392b";

    }

}


/* ================================
   READING ANSWERS
================================ */

function readingAnswer(button, isCorrect) {

    if (isCorrect) {

        button.style.background = "#2e8b57";
        button.style.color = "white";

        button.textContent =
            "✓ " + button.textContent;

    } else {

        button.style.background = "#c0392b";
        button.style.color = "white";

        button.textContent =
            "✗ " + button.textContent;

    }

}


/* ================================
   SPEAKING
================================ */

function showSpeaking(level) {

    const question =
        document.getElementById("speaking-question");


    if (level === "easy") {

        question.textContent =
            "What Kazakh tradition do you like and why?";

    }


    if (level === "medium") {

        question.textContent =
            "How does hospitality influence relationships between people in Kazakhstan?";

    }


    if (level === "hard") {

        question.textContent =
            "How can Kazakh cultural traditions be preserved while Kazakhstan becomes more globalized?";

    }

}


/* ================================
   QUIZ DATA
================================ */

const quizQuestions = [

    {
        question:
            "Which traditional Kazakh musical instrument is widely known around the world?",

        options: [
            "Dombra",
            "Piano",
            "Violin",
            "Drum"
        ],

        correct: 0
    },


    {
        question:
            "What is a traditional Kazakh instrumental musical form called?",

        options: [
            "Kuy",
            "Opera",
            "Jazz",
            "Ballet"
        ],

        correct: 0
    },


    {
        question:
            "Which celebration is strongly associated with spring and renewal?",

        options: [
            "Halloween",
            "Nauryz",
            "Christmas",
            "Thanksgiving"
        ],

        correct: 1
    },


    {
        question:
            "What does hospitality mean?",

        options: [
            "Friendly treatment of guests",
            "A type of clothing",
            "A musical instrument",
            "A traditional game"
        ],

        correct: 0
    },


    {
        question:
            "Which food is traditionally associated with Kazakh cuisine?",

        options: [
            "Beshbarmak",
            "Pizza",
            "Sushi",
            "Tacos"
        ],

        correct: 0
    },


    {
        question:
            "What is a guest called in English?",

        options: [
            "Host",
            "Guest",
            "Musician",
            "Traveller"
        ],

        correct: 1
    },


    {
        question:
            "What is a host?",

        options: [
            "A person who welcomes guests",
            "A traditional dish",
            "A musical instrument",
            "A holiday"
        ],

        correct: 0
    },


    {
        question:
            "What does the word 'heritage' refer to?",

        options: [
            "Traditions and culture passed through generations",
            "A modern sport",
            "A type of food",
            "A school subject"
        ],

        correct: 0
    },


    {
        question:
            "What is one important value connected with Kazakh hospitality?",

        options: [
            "Respect",
            "Competition",
            "Silence",
            "Isolation"
        ],

        correct: 0
    },


    {
        question:
            "How many strings does a traditional dombra have?",

        options: [
            "Two",
            "Three",
            "Four",
            "Six"
        ],

        correct: 0
    },


    {
        question:
            "Which drink is traditionally associated with Kazakh culture?",

        options: [
            "Kumys",
            "Coffee",
            "Lemonade",
            "Cola"
        ],

        correct: 0
    },


    {
        question:
            "What does 'tradition' mean?",

        options: [
            "A custom passed from generation to generation",
            "A new technology",
            "A school building",
            "A type of sport"
        ],

        correct: 0
    },


    {
        question:
            "What can a kuy communicate without words?",

        options: [
            "Stories and emotions",
            "Only numbers",
            "Recipes",
            "Grammar rules"
        ],

        correct: 0
    },


    {
        question:
            "What is often prepared for guests during traditional celebrations?",

        options: [
            "Traditional food",
            "School books",
            "Sports equipment",
            "Musical tickets"
        ],

        correct: 0
    },


    {
        question:
            "What is one purpose of learning English through culture?",

        options: [
            "To make language learning meaningful",
            "To avoid learning vocabulary",
            "To study only history",
            "To stop communicating"
        ],

        correct: 0
    }

];


/* ================================
   QUIZ VARIABLES
================================ */

let currentQuestion = 0;

let score = 0;

let answered = false;


/* ================================
   START QUIZ
================================ */

function loadQuestion() {

    const questionElement =
        document.getElementById("question");

    const optionsElement =
        document.getElementById("quiz-options");

    const numberElement =
        document.getElementById("quiz-number");

    const resultElement =
        document.getElementById("quiz-result");

    const nextButton =
        document.getElementById("next-question");


    const current =
        quizQuestions[currentQuestion];


    questionElement.textContent =
        current.question;


    numberElement.textContent =
        currentQuestion + 1;


    optionsElement.innerHTML = "";

    resultElement.textContent = "";

    nextButton.style.display = "none";

    answered = false;


    current.options.forEach(function(option, index) {

        const button =
            document.createElement("button");

        button.textContent =
            String.fromCharCode(65 + index) +
            ". " +
            option;


        button.onclick = function() {

            answerQuiz(index, button);

        };


        optionsElement.appendChild(button);

    });

}


/* ================================
   ANSWER QUIZ
================================ */

function answerQuiz(selected, selectedButton) {

    if (answered) {
        return;
    }

    answered = true;


    const current =
        quizQuestions[currentQuestion];


    const buttons =
        document.querySelectorAll(".quiz-options button");


    buttons.forEach(function(button, index) {

        button.disabled = true;


        if (index === current.correct) {

            button.classList.add("correct");

        }

    });


    const result =
        document.getElementById("quiz-result");


    if (selected === current.correct) {

        score++;

        selectedButton.classList.add("correct");

        result.textContent =
            "✓ Correct!";

        result.style.color =
            "#2e8b57";

    } else {

        selectedButton.classList.add("wrong");

        result.textContent =
            "✗ Incorrect. The correct answer is: " +
            current.options[current.correct];

        result.style.color =
            "#c0392b";

    }


    const nextButton =
        document.getElementById("next-question");

    nextButton.style.display =
        "block";

}


/* ================================
   NEXT QUESTION
================================ */

function nextQuestion() {

    currentQuestion++;


    if (currentQuestion >= quizQuestions.length) {

        showFinalScore();

        return;

    }


    loadQuestion();

}


/* ================================
   FINAL SCORE
================================ */

function showFinalScore() {

    document.getElementById("quiz-box").style.display =
        "none";


    document.getElementById("quiz-final").style.display =
        "block";


    document.getElementById("final-score").textContent =
        score + " / " + quizQuestions.length;


    const percentage =
        (score / quizQuestions.length) * 100;


    const message =
        document.getElementById("final-message");


    if (percentage === 100) {

        message.textContent =
            "Excellent! Perfect score! 🏆";

    } else if (percentage >= 80) {

        message.textContent =
            "Great job! Your English and culture knowledge are strong! 🔥";

    } else if (percentage >= 60) {

        message.textContent =
            "Good work! Keep practicing and you will improve.";

    } else {

        message.textContent =
            "Keep learning! Try the quiz again and improve your score.";

    }

}


/* ================================
   RESTART QUIZ
================================ */

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    answered = false;


    document.getElementById("quiz-final").style.display =
        "none";


    document.getElementById("quiz-box").style.display =
        "block";


    loadQuestion();

}


/* ================================
   MOBILE MENU CLOSE
================================ */

const navigationLinks =
    document.querySelectorAll(".navigation a");


navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        const navigation =
            document.querySelector(".navigation");

        navigation.classList.remove("active");

    });

});


/* ================================
   START
================================ */

loadQuestion();