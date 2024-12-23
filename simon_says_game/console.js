let boxes = document.querySelectorAll(".colorboxes");
let bool1 = false;
let bool2 = false;
let score = 0;
let seq = [];
let ans = [];
let each = [];

// Add border and collect all boxes
for (let boxContainer of boxes) {
    for (let box of boxContainer.children) {
        box.classList.add("border");
        each.push(box);
    }
}

// Handle clicks on boxes
each.forEach((box, index) => {
    box.addEventListener("click", () => {
        
        bool2 = true;
        ans.push(index); // Push clicked box index
        console.log("Box clicked:", index);
        checkAnswer(ans.length - 1); // Check answer
    });
});

// Start game on key press
let body = document.querySelector("body");
body.addEventListener("keydown", () => {
    if (!bool1) {
        console.log("Key pressed");
        bool1 = true;
        startGame();
    }
});

// Reset function
function reset() {
    seq = [];
    ans = [];
    
    bool2 = false;
    score = 0;
    updateMessage("Begin by pressing any key");
}

// Update message on screen
function updateMessage(message) {
    let h4 = document.querySelector("h4");
    h4.textContent = message;
    h4.style.marginLeft = "6rem";
}


// Generate and show sequence
function showSequence() {
    ans = []; // Clear user input
    let i = 0;

    const interval = setInterval(() => {
        if (i < seq.length) {
            let index = seq[i];
            each[index].style.opacity = "0.5";

            setTimeout(() => {
                each[index].style.opacity = "1";
            }, 250);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 500);
}

// Check user's answer
function checkAnswer(currentIndex) {
    if (ans[currentIndex] !== seq[currentIndex]) {
        alert(`You lost! Final score: ${score}`);
        bool1 = false;
        reset();
    } else if (ans.length === seq.length) {
        score++;
        updateMessage(`Score: ${score}`);
        setTimeout(nextRound, 250);
    }
}

// Start a new round
function nextRound() {
    ans = [];
    let randomIndex = Math.floor(Math.random() * each.length);
    seq.push(randomIndex);
    showSequence();
}

// Start the game
function startGame() {
    reset();
    updateMessage("The game has started!");
    nextRound();
}
