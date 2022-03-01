let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax

let user = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};

// We can add, remove and read files from it any time.

// Property values are accessible using the dot notation:

// get property values of the object:
alert(user.name); // John
alert(user.age); // 30

// The value can be of any type. Let’s add a boolean one:

user.isAdmin = true;

// To remove a property, we can use delete operator:

delete user.age;

// We can also use multiword property names, but then they must be quoted:

let user = {
  name: "John",
  age: 30,
  "likes birds": true, // multiword property name must be quoted
};

// The last property in the list may end with a comma:

let user = {
  name: "John",
  age: 30,
};

// For multiword properties, the dot access doesn’t work:

// this would give a syntax error
user.likes birds = true
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

let key = "likes birds";

// same as user["likes birds"] = true;
user[key] = true;

let user = {
    name: "John",
    age: 30
  };
  
  let key = prompt("What do you want to know about the user?", "name");
  
  // access by variable
  alert( user[key] ); // John (if enter "name")

//   The dot notation cannot be used in a similar way:

let user = {
  name: "John",
  age: 30
};

let key = "name";
alert( user.key ) // undefined

// We can use square brackets in an object literal, when creating an object. That’s called computed properties.

// For instance:

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert( bag.apple ); // 5 if fruit="apple"

// Essentially, that works the same as:

let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;

// We can use more complex expressions inside square brackets:

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};
// In real code we often use existing variables as values for property names.

// For instance:

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

function makeUser(name, age) {
    return {
      name, // same as name: name
      age,  // same as age: age
      // ...
    };
  }
//   We can use both normal properties and shorthands in the same object:

let user = {
  name,  // same as name:name
  age: 30
};
// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
  };
  
  alert( obj.for + obj.let + obj.return );  // 6
  let obj = {
    0: "test" // same as "0": "test"
  };
  
  // both alerts access the same property (the number 0 is converted to string "0")
  alert( obj["0"] ); // test
  alert( obj[0] ); // test (same property)