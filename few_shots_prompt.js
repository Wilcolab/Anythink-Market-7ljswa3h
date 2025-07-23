function addNumbers(a, b) {
    // Check for undefined or null values
    if (a === undefined || a === null || b === undefined || b === null) {
        throw new Error('Both arguments must be provided and cannot be null or undefined');
    }

    // Check if inputs are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }

    // Check for NaN values
    if (isNaN(a) || isNaN(b)) {
        throw new Error('Arguments cannot be NaN');
    }

    return a + b;
}

// Example usage:
// console.log(addNumbers(5, 3)); // Returns 8
// console.log(addNumbers('5', 3)); // Throws error: Both arguments must be numbers
// console.log(addNumbers(5)); // Throws error: Both arguments must be provided and cannot be null or undefined