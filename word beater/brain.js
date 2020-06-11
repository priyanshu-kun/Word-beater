const words = ['strength', "weakness", "contraction", "death", "life", "squirrel", "fabulous", "prison", "available", "detailed", "breakable", "unnatural", "recollect", "immense", "decisive", "identify", "barbarous", "threatening", "downtown", "secretive", "maintain", "unwritten", "comparison", "hapless", "immolate", "general", "snotty", "periodic", "machine", "impair", "wicked", "plucky", "lawyer", "difficult", "encircle", "hulking", "exultant", "overwrought", "disastrous", "idolize", "synonymous", "basketball", "dispensable", "grumpy", "worship"];

const Screen = document.querySelector("#game-input");
let counter = 0;
let typedWord = "";
let timer = 5;
let userscore = 0;

function showWord() {
    document.querySelector(".given-word").innerHTML = words[counter];
}

function TimeOut() {
    let UiClass = document.querySelector(".informantion");
    // console.log("Hello world")
    Screen.value = "";
    counter++;
    timer = 5;
    UiClass.innerHTML = `Times Up Boy! try next...`;
    UiClass.classList.add("timesup");
    setTimeout(() => {
        UiClass.classList.remove("timesup");
        UiClass.innerHTML = "";
    }, 2000);
    showWord()
}


function checkWord(mainWord) {
    if (typedWord === mainWord) {
        // console.log("Bingo")
        let UiClass = document.querySelector(".informantion");
        document.querySelector(".score").innerHTML = ++userscore;

        // UiClass.style.visibility = "visible";
        UiClass.innerHTML = `Correct Word! Keep going...`;
        UiClass.classList.add("right");

        setTimeout(() => {
            UiClass.classList.remove("right");
            UiClass.innerHTML = "";
        }, 2000);

    }
    else {
        let UiClass = document.querySelector(".informantion");
        // UiClass.style.visibility = "visible";
        UiClass.innerHTML = `Wrong Word! try next...`;
        UiClass.classList.add("wrong");
        setTimeout(() => {
            UiClass.classList.remove("wrong");
            UiClass.innerHTML = "";
        }, 2000);
    }


    counter++;
    typedWord = "";
}


window.addEventListener("keypress", function (e) {


    if (e.key !== "Enter") typedWord = typedWord + e.key;
    if (e.keyCode === 13) {
        // console.log("Bingo")
        // console.log(typedWord)
        timer = 5;
        Screen.value = "";
        checkWord(words[counter]);

        showWord();

    }



})



setInterval(() => {
    // console.log("Bingo")
    document.querySelector(".time-left").innerHTML = timer;
    timer--;
    if (counter === words.length) counter = 0;
    if (timer === -1) TimeOut();

}, 1000);


document.addEventListener("DOMContentLoaded", showWord);