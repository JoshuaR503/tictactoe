let currentPlayer = 'x';
let totalTurns = 0;
let isGameFinished = false;

// Perform Logic
const performLogic = (btnId, titleId) => {


    if (!isGameFinished) {
        updateCurrentPlayer();
        win();

        $(btnId).text(currentPlayer);

    }
}

// Check titles
const checkTitles = (titleId, titleId2, titleId3) => {

    const _titleId = $(`#${titleId}`).text();
    const _titleId2 = $(`#${titleId2}`).text();
    const _titleId3 = $(`#${titleId3}`).text();

    console.log(_titleId, _titleId2, _titleId3)

    const titlesMatch = 
    _titleId == currentPlayer &&
    _titleId2 == currentPlayer &&
    _titleId3 == currentPlayer;

    if (titlesMatch) {
        return true;
    }

    return false;
}

// checkVerticalWins
const checkVerticalWins = () => {
    const con1 = checkTitles('button1', 'button4', 'button7');
    const con2 = checkTitles('button2', 'button5', 'button8');
    const con3 = checkTitles('button3', 'button6', 'button9');

    if (con1 || con2 || con3) {
        updateTitle(`user ${currentPlayer} won`);
    }
}

// checkHoritzontalWins
const checkHoritzontalWins = () => {
    const con1 = checkTitles('button1', 'button2', 'button3');
    const con2 = checkTitles('button4', 'button5', 'button6');
    const con3 = checkTitles('button7', 'button8', 'button9');

    if (con1 || con2 || con3) {
        updateTitle(`user ${currentPlayer} won`);
    }
}

// checkDiagonalWins
const checkDiagonalWins = () => {
    const con = checkTitles('button1', 'button2', 'button3');
    const con2 = checkTitles('button7', 'button5', 'button3');

    if (con || con2) {
        updateTitle(`user ${currentPlayer} won`);
    }
}

// win
const win = () => {
    checkVerticalWins();
    checkHoritzontalWins();
    checkDiagonalWins();
}

// Change current player
const updateCurrentPlayer = () => {
    switch (currentPlayer) {
        case 'x':
            currentPlayer = 'o';
            updateTitle('Current Player: X');
            break;

        case 'o':
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

