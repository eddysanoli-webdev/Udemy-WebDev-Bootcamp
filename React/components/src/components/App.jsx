import React from 'react';
import Heading from './Heading';
import List from './List';

/* 
==================
NOTES
==================

Component Naming: Each component in React tends to use pascal case 
(Every word is capitalized)

As reference, its advisable to use the Airbnb React conventions. This includes things like:
  - Adding a space after the name of a self closing tag (<img />)
  - Using pascal case for component names

When exporting you can export any variable, including values. The export can also be either:
    - A default: When using "import value from 'module'", the default value will be
      asigned to the variable "value". You can use any word instead of "value".
    - Non default: List the exact name of the elements that you want to export inside
      a couple of curly braces ({element1, element2}). 

Just like in Python, we can import things using 

    import * as value from 'module';

The functions can then be used by using:
    - value.element1
    - value.element2
    - value.default

*/

const App = () => {
    return (
        <div>
            <Heading />
            <List />
        </div>
    )
}

export default App;