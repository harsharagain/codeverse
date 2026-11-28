// ==========================================
// 1. ARRAYS
// ==========================================

// TypeScript automatically infers the array types.

let stringArr = ['one', 'two', 'three']; // string[]

let guitars = ['Varun', 'Paul', 9909]; // (string | number)[]

let mixedData = ['four', true, 5638]; // (string | boolean | number)[]


// Modifying array elements

stringArr[0] = 'Hi';
// stringArr[0] = 43; // Error: stringArr only accepts strings.

// stringArr.push(43); // Error: Cannot push a number.
stringArr.push('Hi'); // Allowed.


guitars[0] = 1928; // Allowed: number is accepted.
// guitars.unshift(true); // Error: boolean is not accepted.
guitars.unshift('Jim'); // Allowed: string is accepted.


// Array assignments (based on element types)

// stringArr = guitars; // Error: guitars may contain numbers.

guitars = stringArr; // Allowed: string[] is compatible with (string | number)[].

// guitars = mixedData; // Error: mixedData may contain booleans.

mixedData = guitars; // Allowed: mixedData accepts strings and numbers too.


// Empty array

let test = []; // Inferred as an evolving any[] in common TS settings.

test.push('Hello');
test.push(25);
test.push(true);


// Explicitly defining array types

let bands: string[] = [];

bands.push('Sam');
// bands.push(true); // Error: only strings are allowed.


// ==========================================
// 2. TUPLES
// ==========================================

// Tuple: Fixed number of elements with specific types and positions.

let myTuple: [string, number, boolean] = ['Dave', 43, true];

// Regular array: Can contain different types in any order.
let mixed = ['Sam', 23, false];

// myTuple = mixed; // Error: mixed is an array, not a fixed-length tuple.

mixed = myTuple; // Allowed: tuple can be assigned to a compatible array.

// Accessing and modifying tuple elements

myTuple[1] = 23; // Allowed: index 1 must contain a number.

// myTuple[0] = 43; // Error: index 0 must contain a string.


// ==========================================
// 3. OBJECTS
// ==========================================

let myObj: object;

// Arrays and objects are both valid object types.
myObj = [];
console.log(typeof myObj); // object

myObj = bands;
myObj = {};


// Object with inferred property types

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};

// exampleObj.prop1 = 43; // Error: prop1 must be a string.

exampleObj.prop1 = 'Sam'; // Allowed.


// ==========================================
// 4. TYPE ALIASES
// ==========================================

// type keyword creates a custom type.

type Guitarist = {
    name: string;
    active: boolean;

    // Use ? to make a property optional.
    // active?: boolean;

    albums: (string | number)[];
};


// Creating objects using the Guitarist type

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5283, 'OU812'],
};

let har: Guitarist = {
    name: 'Harsh',
    active: true,
    albums: ['IO98', 132],
};


// TypeScript uses structural typing:
// Objects with compatible properties can be assigned
// even if they were not explicitly declared as Guitarist.

let sh = {
    name: 'Sam',
    active: true,
    albums: [943, 890, 'SH092'],
};

evh = har; // Allowed.
evh = sh;  // Allowed.
sh = har;  // Allowed.

// har.years = 40; // Error: 'years' does not exist in Guitarist.


// ==========================================
// 5. FUNCTIONS WITH OBJECT TYPES
// ==========================================

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}`;
};

console.log(greetGuitarist(har));


// ==========================================
// 6. INTERFACES
// ==========================================

// Instead of type, we can also use interface
// to define an object structure.

/*
interface Guitarist {
    name: string;
    active: boolean;
    albums: (string | number)[];
}
*/


// ==========================================
// 7. ENUMS
// ==========================================

// Enums define a set of named constants.

// By default, numeric enums start from 0.

enum Grade {
    U,
    D,
    C,
    B,
    A,
}

console.log(Grade.U); // 0
console.log(Grade.D); // 1
console.log(Grade.C); // 2
console.log(Grade.B); // 3
console.log(Grade.A); // 4


// Custom starting value

enum Grade1 {
    U = 1,
    D,
    C,
}

console.log(Grade1.U); // 1
console.log(Grade1.D); // 2
console.log(Grade1.C); // 3