// _ can be used to make large numbers easier to read
let billion = 1000000000;
// Same as writing 1_000_000_000

// e is used to write numbers in a shorter way
let billion2 = 1e9; // 1 followed by 9 zeros = 1 billion

let number = 6.5e9; // 6.5 billion = 6_500_000_000

// e3 means multiply by 10^3 (1000)
alert(1e3 == 1 * 1000); // true

// e6 means multiply by 10^6 (1,000,000)
alert(1.23e6 === 1.23 * 1000000); // true


// 0.000001 can also be written using e notation
let mcs = 0.000001;
let mcs2 = 1e-6; // e-6 means divide by 10^6

// e-3 means divide by 10^3 (1000)
alert(1e-3 == 1 / 1000); // true