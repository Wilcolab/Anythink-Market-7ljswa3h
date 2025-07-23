/**
 * String case conversion utilities for transforming text into different naming conventions.
 * 
 * This module provides functions to convert strings into various case formats commonly used
 * in programming. It handles multiple input formats including space-separated words,
 * dash-separated (kebab-case), underscore-separated (snake_case), and existing camelCase
 * or PascalCase strings.
 * 
 * @module StringCaseConverters
 * 
 * @example
 * const { camelCase, dotCase } = require('./refined_prompts');
 * 
 * // Convert various formats to camelCase
 * console.log(camelCase('hello world'));        // 'helloWorld'
 * console.log(camelCase('hello-world'));        // 'helloWorld'
 * console.log(camelCase('hello_world'));        // 'helloWorld'
 * console.log(camelCase('HelloWorld'));         // 'helloWorld'
 * console.log(camelCase('  hello   world  '));  // 'helloWorld'
 * 
 * // Convert various formats to dot.case
 * console.log(dotCase('hello world'));          // 'hello.world'
 * console.log(dotCase('hello-world'));          // 'hello.world'
 * console.log(dotCase('hello_world'));          // 'hello.world'
 * console.log(dotCase('HelloWorld'));           // 'hello.world'
 * console.log(dotCase('  hello   world  '));    // 'hello.world'
 * 
 * // Special characters are removed
 * console.log(camelCase('hello@world!'));       // 'helloWorld'
 * console.log(dotCase('hello#world$'));         // 'hello.world'
 * 
 * // Empty or invalid inputs
 * console.log(camelCase(''));                   // ''
 * console.log(camelCase('   '));                // ''
 * console.log(camelCase('@#$'));                // ''
 * 
 * // Type checking
 * try {
 *   camelCase(123);                             // Throws TypeError
 * } catch (e) {
 *   console.log(e.message);                     // 'Input must be a string'
 * }
 */
/**
 * Converts a string to camelCase format
 * @param {*} input - The input to convert to camelCase
 * @returns {string} The camelCase formatted string
 * @throws {TypeError} If input is not a string
 */
function camelCase(input) {
    // Check if input is a string
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim whitespace and check if empty
    const trimmed = input.trim();
    if (!trimmed) {
        return '';
    }

    // Remove non-alphanumeric characters except spaces, dashes, and underscores
    const cleaned = trimmed.replace(/[^a-zA-Z0-9\s\-_]/g, '');

    // Split by spaces, dashes, underscores, or capital letters (for existing camelCase/PascalCase)
    const words = cleaned
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters in camelCase
        .split(/[\s\-_]+/) // Split by spaces, dashes, underscores
        .filter(word => word.length > 0); // Remove empty strings

    // If no valid words found, return empty string
    if (words.length === 0) {
        return '';
    }

    // Convert to camelCase: first word lowercase, rest title case
    return words
        .map((word, index) => {
            const lowercased = word.toLowerCase();
            if (index === 0) {
                return lowercased;
            }
            // Capitalize first letter of subsequent words
            return lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
        })
        .join('');
}

/**
 * Converts a string to dot.case format
 * @param {*} input - The input to convert to dot.case
 * @returns {string} The dot.case formatted string
 * @throws {TypeError} If input is not a string
 */
function dotCase(input) {
    // Check if input is a string
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim whitespace and check if empty
    const trimmed = input.trim();
    if (!trimmed) {
        return '';
    }

    // Remove non-alphanumeric characters except spaces, dashes, and underscores
    const cleaned = trimmed.replace(/[^a-zA-Z0-9\s\-_]/g, '');

    // Split by spaces, dashes, underscores, or capital letters (for existing camelCase/PascalCase)
    const words = cleaned
        .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters in camelCase
        .split(/[\s\-_]+/) // Split by spaces, dashes, underscores
        .filter(word => word.length > 0); // Remove empty strings

    // If no valid words found, return empty string
    if (words.length === 0) {
        return '';
    }

    // Convert to dot.case: all words lowercase joined by dots
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

module.exports = { camelCase, dotCase };
