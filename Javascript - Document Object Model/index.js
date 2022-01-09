/*

DOM NOTES
==================

Steps for DOM selection:
    1. Look inside the HTML document
    2. Select an element or tag
    3. Point to the contents of the tag

    document.querySelector("h1").innerHTML = "Goodbye";

DOM Object Properties:
    - innerHTML: Text inside HTML tag. Useful to add new HTML inside the selected element
    - style: Stylesheet applied
    - classList: Classes included inside element
    - textContent: Ignores child tags inside the element and return only the text
    - attributes: List of all the attributes of an element

DOM Object Methods:
    - click(): Exclusive for buttons
    - add(): Add a class after selecting one with "classList"
    - remove(): Remove a class from an element after selecting it with "classList"
    - toggle(): Flip flop that changes between adding and removing a class from an element
    - getAttribute(): Retrieve attributes (class, ID, type, href) of element 
    - setAttribute(1, 2): 1. Attribute to change / 2. What do you want to change it to.

DOM Object Selectors:
    - firstChild: First element inside the object
    - querySelector: Get selector (In the same way elements are selected in CSS). Returns single item.
    - querySelectorAll: The same as "querySelector", but returns an array.
    - getElementsByTagName: Get element by its tag name (returns an array if multiple elements found)
    - getElementsByClassName: Get element by its class (returns array)
    - getElementById: Get element by Id (returns single item)


Individual style properties should not be modified or set using Javascript. New classes should
be created inside the stylesheet and then assigned using javascript.


EXAMPLES
==================

Change text of third element in the list
    document.querySelector("ul").lastElementChild.innerHTML = "Eddy";

Change the color of the link inside the list   
    // NOTE: If we dont select <a>, we only color the dot of the list
    document.querySelector("li a").style.color = "yellow";

Change background color of button
    document.querySelector("button").style.backgroundColor = "yellow";

Add class "huge" to "h1" header
    document.querySelector("h1").classList.add("huge"); OR
    document.querySelector("#title").classList.add("huge");

Add new HTML inside the H1 tag
    document.querySelector("h1").innerHTML = "<em>Change da world. My final message. Goodbye</em>";

View, Get and Set the attribute of the first "a" tag
    document.querySelector("a").attributes;                         // List of all attributes: "href"
    document.querySelector("a").getAttribute("href")                // Get "href" attribute: "google.com"
    document.querySelector("a").setAttribute("href", "bing.com");   // Set the "href" to "bing.com"

*/

document.querySelector("a").setAttribute("href", "https://www.bing.com");