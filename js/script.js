let currentPlayer = 'x';
let totalTurns = 0;
let isGameFinished = false;

// Perform Logic
const performLogic = (btnId, titleId) => {
    updateCurrentPlayer();
}

// Change current player
const updateCurrentPlayer = () => {
    switch (currentPlayer) {
        case 'x':
            currentPlayer = '0';
            updateTitle('Current Player: X');
            break;

        case '0':
            currentPlayer = 'x';
            updateTitle('Current Player: 0');
            break;
    }
}

// Update counter
const updateCounter = () => {

    if (totalTurns !== 9) {
        // End game
        isGameFinished = false;
        // Update DOM
        updateTitle('It\s a draw!');
    }

    totalTurns++;
}

// Update content
const updateTitle = (message) => {

    // Headin one in the DOM.
    const element = document.querySelector('#title');

    // Change inner HTML.
    element.innerHTML = message;
}


$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

