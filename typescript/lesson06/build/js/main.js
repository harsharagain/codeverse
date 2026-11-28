"use strict";
// Classes
// Classes act as blueprints for creating objects.
class Coder {
    constructor(name, music, age, lang = "TypeScript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        // Access modifiers automatically create and initialize properties.
        // No need to assign them again inside the constructor.
    }
    // Public method (accessible outside the class)
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
// Create an instance of Coder
const Dave = new Coder("Dave", "Rock", 33);
console.log(Dave.getAge());
// Accessing class properties
console.log(Dave.name); // Allowed (public, readonly)
console.log(Dave.music); // Allowed (public)
// console.log(Dave.age);  // Error: private property
// console.log(Dave.lang); // Error: protected property
// Dave.name = "John"; // Error: readonly property cannot be reassigned
