// Function: Get full date string from number
exports.getDate = function() {

    // Get current date
    const today = new Date();

    // Options for day format
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    // Render the date
    return today.toLocaleDateString('en-US', options);

}

// Function: Get day string from number
exports.getDay = function() {

    // Get current date
    const today = new Date();

    // Options for day format
    const options = {
        weekday: "long"
    }

    // Render the date
    return today.toLocaleDateString('en-US', options);

}


