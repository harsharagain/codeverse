// Type Assertions

// Tells TypeScript to treat a value as a specific type.
// It does not change the actual runtime value.

type One = string;
type Two = string | number;
type Three = "hello";

// Convert to a less specific or more specific type
let a: One = "hello";

let b = a as Two;   // Less specific: string → string | number
let c = a as Three; // More specific: string → "hello"

// Alternative assertion syntax (angle brackets)
let d = <One>"world";
let e = <string | number>"world";

// Function returning either a number or a string
const addOrConcat = (
    a: number,
    b: number,
    c: "add" | "concat"
): number | string => {
    if (c === "add") return a + b;
    return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! TypeScript trusts the assertion,
// even if the actual returned value has a different type.
let nextVal: number = addOrConcat(2, 2, "concat") as number;
// Runtime value is "22", not 22.

// Directly asserting unrelated types causes an error.
 // let invalid = 10 as string;

// Use unknown as an intermediate type when necessary.
let forced = (10 as unknown) as string;
// This does NOT convert 10 into a string.

// DOM Type Assertions
// ! is a non-null assertion: tells TypeScript the element exists.
const img = document.querySelector("img")!;

// Assert that the returned element is an HTMLImageElement.
const myImg = document.getElementById("img") as HTMLImageElement;

// Alternative angle-bracket syntax.
// Not supported in TSX because it conflicts with JSX syntax.
const nextImg = <HTMLImageElement>document.getElementById("img");

// Accessing image properties
img.src;
myImg.src;
nextImg.src;