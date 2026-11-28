"use strict";
// ==========================================
// 1. TYPE ALIASES
// ==========================================
// Interfaces cannot be used to create union type aliases.
// interface PostId = stringOrNumber; // Error
// ==========================================
// 2. LITERAL TYPES
// ==========================================
// Restricts a variable to a specific value.
let myName;
// myName = 'John'; // Error
myName = 'Dave'; // Allowed
// Multiple allowed literal values.
let userName;
userName = 'Amy';
// userName = 'Sam'; // Error
// ==========================================
// 3. FUNCTIONS
// ==========================================
// Explicit parameter and return types.
const add = (a, b) => {
    return a + b;
};
// void: Function does not return a value.
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
// Function expression.
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(5, 8));
/*
interface mathFunction {
    (a: number, b: number): number;
}
*/
// Using the function type.
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
// ==========================================
// 5. OPTIONAL PARAMETERS
// ==========================================
// Use ? to make a parameter optional.
// Optional parameters must come after required parameters.
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(2, 3)); // 5
logMsg(addAll(2, 3, 4)); // 9
// ==========================================
// 6. DEFAULT PARAMETERS
// ==========================================
// Assign a default value using =.
// Used when the argument is omitted.
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(sumAll(2, 3, 2)); // 7
logMsg(sumAll(2, 3)); // 7
logMsg(sumAll(2, 3, 4)); // 9
// ==========================================
// 7. REST PARAMETERS
// ==========================================
// ... collects multiple arguments into an array.
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr, 0);
};
logMsg(total(1, 2, 3, 4)); // 10
// Required parameter followed by rest parameters.
const totalAll = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr, 0);
};
logMsg(totalAll(1, 2, 3, 4)); // 10
