import React from 'react';

// Conditional style and content for heading
let headingStyle = {color: "red"};
let headingContent = 0;

// Change the content and style depending on the hour
const hour = new Date().getHours();
if (hour >= 0  && hour < 12) {
  headingContent = "Good Morning!";
  headingStyle.color = "red";
}
else if (hour >= 12 && hour < 19) {
  headingContent = "Good Evening!";
  headingStyle.color = "green";
}
else if (hour >= 19 && hour < 24) {
  headingContent = "Good Night!";
  headingStyle.color = "blue";
}

const Heading = () => {
    return (
        <h1 className="heading" style={headingStyle}>{headingContent}</h1>
    );
}

export default Heading;