// Select all the "drum" buttons
var arrayButtons = document.querySelectorAll(".drum");

// Steps:
// 1. Iterate through every "drum" button
// 2. Add event listener (Check for clicks on the button)
// 3. Execute a function ("handleClick()") when the event occurs.
// 4. Function should not be called (remove parenthesis) or it would be called on reload
arrayButtons.forEach( function(button) {
    button.addEventListener("click", handleClick);
});

// Callback function:
// Function to load and play a specific audio depending on the key pressed
function loadAndPlay(key) {

    // Variable for audio 
    var drumAudio;

    // Load audio based on the button clicked
    switch (key) {
        case "w":
            drumAudio = new Audio('sounds/tom-1.mp3');
            break;

        case "a":
            drumAudio = new Audio('sounds/tom-2.mp3');
            break;

        case "s":
            drumAudio = new Audio('sounds/tom-3.mp3');
            break;

        case "d":
            drumAudio = new Audio('sounds/tom-4.mp3');
            break;
        
        case "j":
            drumAudio = new Audio('sounds/crash.mp3');
            break;

        case "k":
            drumAudio = new Audio('sounds/kick-bass.mp3');
            break;

        case "l":
            drumAudio = new Audio('sounds/snare.mp3');
            break;
    
        default:
            console.log(`Unknown key pressed: ${key}`);
            break;
    }

    // Play audio (Checks if audio has been defined)
    if (drumAudio) {
        drumAudio.play();
    }

}

// Callback function:
// Flash the button when its pressed
function buttonAnimation(key) {

    // Check if key pressed is inside the available keys
    if (["a", "s", "d", "w", "j", "k", "l"].includes(key)) {

        // Select button and add class "pressed"
        var activeButton = document.querySelector(`.${key}`);
        activeButton.classList.add("pressed");

        // Remove the "pressed" class after 0.5s
        setTimeout( function() {
            activeButton.classList.remove("pressed");
        }, 50);
    }
    else {
        console.log(`Unknown key pressed: ${key}`);
    }



}
    

// Function to play sounds when clicking each button
function handleClick() {

    // Take note of the text inside the HTML button
    var buttonInnerHTML = this.innerHTML;

    // Play the corresponding sound
    loadAndPlay(buttonInnerHTML);

    // Make button flash
    buttonAnimation(buttonInnerHTML);
    
}

// Function to play sounds when pressing a key
document.addEventListener("keydown", function(event) {
    
    // Take note of the key pressed
    var keyPressed = event.key;

    // Play the corresponding sound
    loadAndPlay(keyPressed);

    // Make button flash
    buttonAnimation(keyPressed);

});