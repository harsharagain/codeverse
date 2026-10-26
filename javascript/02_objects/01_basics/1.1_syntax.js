let user = new Object(); // "object constructor" syntax
user = {};               // "object literal" syntax

let profile = {       // an object
  name: "Ani",        // by key "name" store value "John"
  age: 30,            // by key "age" store value 30
  "likes birds": true // multiword property name must be quoted
};

// get property values of the object
alert( profile.name ); // Ani
alert( profile.age );     // 30

// to add a property using dot access
profile.isAdmin = true;
profile.likes cat = false; // Error! Doesn't work for multiword

// to add a property using square brackets
profile["likes cat"] = false;

// to remove a property
delete profile.age;






