var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var userClicks = 0;
var level = -1;
var gameOver = true;

/* ==========================
    GAMEPLAY
   ========================== */

// Gameplay: Add next button to the sequence
function nextSequence() {

    // Increase the level
    level ++;

    // Change page title to the current level
    $("#level-title").text(`Level ${level}`);

    // Wait 1 second before the following code
    setTimeout( function () {  

        // Generate a random number between 0 and 3
        var randomNumber = Math.floor(Math.random() * 4);

        // Get random color
        var randomChosenColor = buttonColors[randomNumber];

        // Flash button and play sound
        flashButton(randomChosenColor);
        playSound(randomChosenColor);

        // Add the random color at the end of the game pattern
        gamePattern.push(randomChosenColor);

        // Resets the user clicked pattern and the number of clicks
        userClickedPattern = [];
        userClicks = 0;
    
    
    }, 1000);

}


/* ==========================
    CALLBACKS
   ========================== */

// Callback: Play sound
function playSound(color) {
    var buttonAudio = new Audio(`sounds/${color}.mp3`);
    buttonAudio.play();
}

// Callback: Flash button
function flashButton(color) {

    // Select the pressed button
    var selectedButton = $(`.simon-button.${color}`);

    // Add the class pressed
    selectedButton.addClass("pressed");
    selectedButton.fadeOut(40).fadeIn(40);

    // Remove the class pressed after 0.04s
    setTimeout( function() {
        selectedButton.removeClass("pressed");
    }, 40);
}


/* ==========================
    EVENT LISTENERS
   ========================== */

// Event Listener: Flash button when pressed
$(".simon-button").click( function() {

    // Only clickable after pressing a button (Level different from -1)
    if (level != -1) {

        // Get the color of the clicked button
        var selectedColor = $(this).attr("id");
        
        // Flash button
        flashButton(selectedColor);

        // Play sound
        playSound(selectedColor);

        // Add the currently selected color to "userClickedPattern"
        userClickedPattern.push(selectedColor);

        // Log patterns
        console.log("Game Pattern: " + gamePattern);
        console.log("User Clicked Pattern: " + userClickedPattern);

        // Gradual inclusion of all the player clicks
        var gameSubPattern = gamePattern.slice(0, userClicks + 1);

        // Check for partial and full pattern equality
        var equalSubPatterns = (JSON.stringify(userClickedPattern) === JSON.stringify(gameSubPattern));
        var equalPatterns = (JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern));

        // IF: The player completes the whole pattern
        // ELSE: The player still has not completed the sequence
        if (equalPatterns) {
            nextSequence();
        }
        else {

            // IF: Player clicked the wrong color in the sequence
            // ELSE: Player clicked the correct color in the sequence
            if (!equalSubPatterns) {
                
                // Game over text
                $("#level-title").text("Game Over, Press Any Key to Restart");

                // Game over sound effect
                var buttonAudio = new Audio("sounds/wrong.mp3");
                buttonAudio.play();

                // Game over flash
                $("body").addClass("game-over");
                setTimeout(function () {
                    $("body").removeClass("game-over");
                }, 200);

                // Indicate that the game has finished
                gameOver = true;

                // Reset game parameters
                level = -1;
                gamePattern = [];
                userClickedPattern = [];
                userClicks = 0;
            }
            else {

                // Increase the number of buttons that the player has clicked succesfully
                userClicks ++;
            }

        }

    }

});

// Event Listener: Any key was pressed
$(document).keypress( function(event) {

    // Only executes if game hasn't started
    if (gameOver){

        // Generate next color in the sequence
        nextSequence();

        // Set the game as "started"
        gameOver = false;

    }
    
});