// ==========================================
// 1. TYPE ALIASES
// ==========================================

// Creating reusable types using 'type'.

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist = {
    name?: string; // Optional property
    active: boolean;
    albums: stringOrNumberArray;
};

type UserId = stringOrNumber;


// Interfaces cannot be used to create union type aliases.

// interface PostId = stringOrNumber; // Error


// ==========================================
// 2. LITERAL TYPES
// ==========================================

// Restricts a variable to a specific value.

let myName: 'Dave';

// myName = 'John'; // Error
myName = 'Dave'; // Allowed


// Multiple allowed literal values.

let userName: 'Dave' | 'John' | 'Amy';

userName = 'Amy';
// userName = 'Sam'; // Error


// ==========================================
// 3. FUNCTIONS
// ==========================================

// Explicit parameter and return types.

const add = (a: number, b: number): number => {
    return a + b;
};


// void: Function does not return a value.

const logMsg = (message: any): void => {
    console.log(message);
};

logMsg('Hello');
logMsg(add(2, 3));


// Function expression.

let subtract = function (c: number, d: number): number {
    return c - d;
};

logMsg(subtract(5, 8));


// ==========================================
// 4. FUNCTION TYPE ALIASES
// ==========================================

// Defining a reusable function type.

type mathFunction = (a: number, b: number) => number;

/*
interface mathFunction {
    (a: number, b: number): number;
}
*/


// Using the function type.

let multiply: mathFunction = function (c, d) {
    return c * d;
};

logMsg(multiply(2, 2));


// ==========================================
// 5. OPTIONAL PARAMETERS
// ==========================================

// Use ? to make a parameter optional.
// Optional parameters must come after required parameters.

const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }

    return a + b;
};

logMsg(addAll(2, 3));    // 5
logMsg(addAll(2, 3, 4)); // 9


// ==========================================
// 6. DEFAULT PARAMETERS
// ==========================================

// Assign a default value using =.
// Used when the argument is omitted.

const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c;
};

logMsg(sumAll(2, 3, 2)); // 7
logMsg(sumAll(2, 3));    // 7
logMsg(sumAll(2, 3, 4)); // 9


// ==========================================
// 7. REST PARAMETERS
// ==========================================

// ... collects multiple arguments into an array.

const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr, 0);
};

logMsg(total(1, 2, 3, 4)); // 10


// Required parameter followed by rest parameters.

const totalAll = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr, 0);
};

logMsg(totalAll(1, 2, 3, 4)); // 10