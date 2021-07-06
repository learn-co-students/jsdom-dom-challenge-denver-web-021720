document.addEventListener("DOMContentLoaded", () => {
    setInterval(counter, 1000);
})

let isActive = true;

function counter() {
    if (isActive) {
        let counterElem = document.getElementById("counter");
        let sec = parseInt(counterElem.innerText);
        counterElem.innerText = sec + 1;
    }
}

const minusButton = document.getElementById("minus");
const plusButton = document.getElementById("plus");
const heartButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const submitButton = document.getElementById("submit");


minusButton.addEventListener("click", () => {
    if (isActive) {
        let counterElem = document.getElementById("counter");
        let sec = parseInt(counterElem.innerText);
        counterElem.innerText = sec - 1;
    }
})

plusButton.addEventListener("click", () => {
    counter();
})

heartButton.addEventListener("click", () => {
    if (isActive) {
        let likedNumber = document.getElementById("counter").innerText;
        let likedNumList = document.getElementsByTagName("li");
        let numLikes = 1;
        for (let i = 0; i < likedNumList.length; i++) {
            if (likedNumber == parseInt(likedNumList[i].innerText.match(/\d+/g)[0])) {
                numLikes = parseInt(likedNumList[i].innerText.match(/\d+/g)[1]);
                likedNumList[i].innerText = `${likedNumber} has ${numLikes + 1} likes`
                return;
            }
        }
        let newLike = document.createElement("li");
        newLike.innerText = `${likedNumber} has ${numLikes} like`
        document.getElementById("likes").appendChild(newLike);
    }
})

pauseButton.addEventListener("click", () => {
    isActive = !isActive;
    if (isActive) {
        pauseButton.innerText = "pause";
    }
    else {
        pauseButton.innerText = "resume";
    }
})

submitButton.addEventListener("click", () => {
    event.preventDefault();
    let listComments = document.getElementById("list");
    let input = document.getElementById("comment-input").value;
    let newComment = document.createElement("p");
    newComment.innerText = input;
    listComments.appendChild(newComment);

})