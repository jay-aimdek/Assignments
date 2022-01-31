$(document).ready(function () {

    $("#content").hide();

    var optionsDiv = document.getElementById("optionsDiv");
    let queIndex;
    let result ;


    $("#next").click(function() {
        queIndex++;
        setNextQuestion();
    });

    $("#result").click(function() {
        resetArea();
        $("#result").hide();
        $("#start").text("Restart");
        $("#start").show();
        var resultText = "Your Score is " +result+ "/5"; 
        $("#question").text(resultText);
    });

    $("#result").hide();

    $("#start").click(function () {
        $("#start").hide();
        $("#content").show();
        $("#next").show();
        queIndex = 0;
        result = 0;
        setNextQuestion();
    });

    function setNextQuestion() {
        resetArea();
        showQuestion(questions[queIndex]);
    }

    function showQuestion(question) {
        const queText = question.que;
        $("#question").text(queText);

        question.answer.forEach(answer => {
            var optionButton = document.createElement("button");
            optionButton.classList.add("btn", "btn-secondary", "m-3", "p-1", "d-block");

            optionButton.innerText = answer.text;

            if (answer.correct) {
                optionButton.dataset.correct = answer.correct;
            }
            optionButton.addEventListener('click', selectAnswer);
            document.getElementById("optionsDiv").appendChild(optionButton);
        });

    }

    function selectAnswer(e) {
        e.target.classList.add('border', 'border-dark', 'border-3');
        Array.from(optionsDiv.children).forEach(option => {
            setOptionColor(option, option.dataset.correct);
        });
        if(e.target.dataset.correct) {
            result++;
        }
        if(queIndex >= questions.length-1) {
            $("#next").hide();
            $("#result").show();
            
        }

    }

    function setOptionColor(element, correct) {
        if (correct) {
            element.classList.add('btn-success');
        } else {
            element.classList.add('btn-danger');
        }
        Array.from(optionsDiv.children).forEach(option => {
            option.classList.add('disabled');
        });
        $("#next").removeClass("disabled");
    }


    function resetArea() {
        $("#next").addClass("disabled");

        while (optionsDiv.firstChild) {
            optionsDiv.removeChild(optionsDiv.firstChild);
        }
    }


    const questions = [
        {
            que: 'Question 1',
            answer: [
                { text: 'Answer 1', correct: false },
                { text: 'Answer 2', correct: false },
                { text: 'Answer 3', correct: true },
                { text: 'Answer 4', correct: false }
            ]
        },
        {
            que: 'Question 2',
            answer: [
                { text: 'Answer 1', correct: true },
                { text: 'Answer 2', correct: false },
                { text: 'Answer 3', correct: false },
                { text: 'Answer 4', correct: false }
            ]
        },
        {
            que: 'Question 3',
            answer: [
                { text: 'Answer 1', correct: true },
                { text: 'Answer 2', correct: false },
                { text: 'Answer 3', correct: false },
                { text: 'Answer 4', correct: false }
            ]
        },
        {
            que: 'Question 4',
            answer: [
                { text: 'Answer 1', correct: false },
                { text: 'Answer 2', correct: false },
                { text: 'Answer 3', correct: false },
                { text: 'Answer 4', correct: true }
            ]
        },
        {
            que: 'Question 5',
            answer: [
                { text: 'Answer 1', correct: false },
                { text: 'Answer 2', correct: true },
                { text: 'Answer 3', correct: false },
                { text: 'Answer 4', correct: false }
            ]
        }
    ]



});