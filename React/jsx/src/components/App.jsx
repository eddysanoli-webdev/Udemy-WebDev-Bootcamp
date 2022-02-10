import React from 'react';
import Heading from './Heading';

/*
===================
NOTES
===================

React uses JSX and Babel to compile native HTML code into plain javascript. For example,
the following three lines of code to write an H1 header

  var h1 = document.createElement('h1');
  h1.innerHTML = 'Hello World!';
  document.getElementById('root').appendChild(h1);

Gets replaced by the following on React

  ReactDOM.render(
    <h1>Hello World!</h1>,
    document.getElementById('root')
  );


Babel makes sure that the latest features of javascript are converted or compiled
into plain old javascript, meaning that it increases compatibility with almost all browsers


Render has 3 inputs:
- What to show (source HTML)
- Where to show it (get "root" div)
- Callback after rendering


JSX and Statements: JSX supports the use of expressions inside the HTML, but not statements. 
In other words, dont include if statements or while loops inside the JSX curly braces

Attribute Casing in JSX: Even though we can write HTML in JSX, the casing for it must follow
the camel casing convention used in javascript. Emmet uses this casing by default.

Inline Styles: Inline styles require that you pass a dictionary to the "style" attribute.
If a string is passed an error is returned. To insert a javascript object inside the JSX
we have to use double curly braces "{{}}".

*/


// Footer name
const name = "Eduardo Santizo";

// API route for random pictures from Picsum
const picsum = "https://picsum.photos/200";

const App = () => {
    return (
        <div>
            <Heading />

            {/* Inline styles */}
            {/* Used for dynamic changes to styling */}
            <p style={{ fontSize: "2rem" }}>My lucky number is {Math.floor(Math.random() * 10)}</p>

            {/* Assigning a class to a tag */}
            <div className="images">
                <img src="https://i.guim.co.uk/img/media/a6795e6f75daa968c1154d4acedc091599c98474/0_299_4973_2984/master/4973.jpg?width=700&quality=85&auto=format&fit=max&s=2801443e8af36a1cbbc7321c724fa931" alt="" />
                <img src="https://www.imperial.ac.uk/news/image/mainnews2012/33911.jpg" alt="" />
                <img src="https://barradeideas.com/wp-content/uploads/2019/09/fast-food.jpg" alt="" />
                <img src={picsum} alt="Random pictures" />
            </div>

            {/* Automated footer */}
            <p>Created by {name}</p>
            <p>Copyright {new Date().getFullYear()}</p>

        </div>
    )
};

export default App;