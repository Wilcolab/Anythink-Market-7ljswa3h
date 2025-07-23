/**
 * Converts a string to kebab-case format
 * @param {string} str - The input string to convert
 * @returns {string} The kebab-case formatted string
 * @throws {TypeError} If input is not a string
 */
function toKebabCase(str) {
    // Validate input type
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim whitespace from beginning and end
    const trimmed = str.trim();

    // Return empty string for empty or whitespace-only input
    if (!trimmed) {
        return '';
    }

    // Convert the string to kebab-case:
    // 1. Replace underscores with hyphens
    // 2. Insert hyphen before uppercase letters in camelCase/PascalCase
    // 3. Replace multiple spaces or mixed delimiters with single hyphen
    // 4. Convert to lowercase
    // 5. Remove leading/trailing hyphens
    // 6. Replace multiple consecutive hyphens with single hyphen
    return trimmed
        .replace(/_/g, '-')                           // Replace underscores with hyphens
        .replace(/([a-z])([A-Z])/g, '$1-$2')         // Insert hyphen between lowercase and uppercase
        .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')    // Handle consecutive uppercase letters
        .replace(/[\s\-]+/g, '-')                    // Replace spaces and multiple hyphens with single hyphen
        .toLowerCase()                                // Convert entire string to lowercase
        .replace(/^-+|-+$/g, '')                     // Remove leading and trailing hyphens
        .replace(/-{2,}/g, '-');                     // Replace multiple consecutive hyphens with single
}

// Example usage:
// console.log(toKebabCase("hello world"));           // "hello-world"
// console.log(toKebabCase("Hello World"));           // "hello-world"
// console.log(toKebabCase("helloWorld"));            // "hello-world"
// console.log(toKebabCase("HelloWorld"));            // "hello-world"
// console.log(toKebabCase("hello_world"));           // "hello-world"
// console.log(toKebabCase("hello   world"));         // "hello-world"
// console.log(toKebabCase("  hello world  "));       // "hello-world"
// console.log(toKebabCase(""));                      // ""
// console.log(toKebabCase("   "));                   // ""
// console.log(toKebabCase(123));                     // TypeError: Input must be a string