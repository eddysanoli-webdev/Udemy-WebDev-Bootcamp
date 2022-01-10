/*

JQUERY NOTES
==================

Google CDN for JQuery 3.x
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

Minified code removes newlines and spaces to make the code more memory efficient

JQuery smartly changes between "document.querySelector()" and "document.querySelectorAll()".
Theres no need to use both methods. Both are covered by "$".

Shortcuts in JQuery
    - document.querySelector(): jQuery() / $()
    - document.querySelector().listClasses.add(): .addClass()
    - document.querySelector().listClasses.remove(): .removeClass()
    - document.querySelector().innerHTML: .html()
    - document.querySelector().textContent: .text()
    - document.querySelector().addEventListener(): .on("event", function)

Styles in JQuery
    - SET: selector.css("property", "value")
    - GET: selector.css("property")

Unique Functionalities of JQuery
    - .hasClass(): Returns boolean when element has the specified class

For more animations check for the: JQuery effects animations


EXAMPLES
==================

Change text color to red
    $("h1").css("color", "red");

Check if JQuery library is ready (Only needed if custom scripts are loaded before JQuery)
    $(document).ready(function() {
        // Code to execute
    })

Add a class to H1
    $("h1").addClass("big-title");

Add multiple classes to H1
    $("h1").addClass("big-title margin-50");

Add new text to H1
    $("h1").text("Bye");

Add new text to all buttons
    $("button").text("Don't Click Me");

Add new HTML for all buttons
    $("button").html(<em>Hey</em>);

Get attribute of anchor tag
    $("a").attr("src")

Set attribute of anchor tag
    $("a").attr("href", "www.yahoo.com");

Get classes of H1 
    $("h1").attr("class");


EVENT LISTENERS

Add event listener
    $("h1").click( function() {
        $("h1").css("color", "purple");
    });

Add event listener to all buttons
    $("button").click( function() {
        $("h1").css("color", "purple");
    });

Add keystroke event listener to input bar (To add it to the entire website use $(document))
    $("input").keypress(function(event) {
        console.log(event.key);
    });

Show the key pressed as the H1 text
    $(document).keypress( function(event) {
        $("h1").text(event.key);
    });

Respond to any event (Add any event listener)
    $("h1").on("mouseover", function() {
        $("h1").css("color", "purple");
    });


ADD AND REMOVE ELEMENTS

Add button before the H1 tag
    $("h1").before("<button>New</button>");

Add button after the H1 tag
    $("h1").after("<button>New</button>");

Add button inside H1 tag, before the "Hello" text
    $("h1").prepend("<button>New</button>");

Add button inside H1 tag, after the "Hello" text
    $("h1").append("<button>New</button>");

Remove all buttons
    $("button").remove();


ANIMATIONS

Hide or show H1
    $("button").on("click", function() {
        $("h1").hide();
        $("h1").show();
        $("h1").toggle();       // Change between hide and show
    });

H1 fade away or fade in
    $("button").on("click", function() {
        $("h1").fadeOut();
        $("h1").fadeIn();
        $("h1").fadeToggle();       // Change between fadeIn and fadeOut
    });

H1 slide up and down
    $("button").on("click", function() {
        $("h1").slideUp();
        $("h1").slideDown();
        $("h1").slideToggle();       // Change between fadeIn and fadeOut
    });

Define custom animation (Only able to animate properties that have numerical values)
    $("button").on("click", function() {
        $("h1").animate((opacity: 0.5));
    });

Chain animations
    $("button").on("click", function() {
        $("h1").slideUp().slideDown().animate((opacity: 0.5));
    });

*/

$("button").on("click", function() {
    $("h1").slideToggle();
});