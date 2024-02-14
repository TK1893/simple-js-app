
// Let zum Speichern / Deklarieren von Variablen
// let age = 29;

// let myName = 'Tobias';
// document.write(myName);
// myName = 'Tobsen Noah';
// document.write(myName);


// let simpleAddition = 2 + 6;
// document.write(simpleAddition);

// let size = 100;
// let doubleSize = size * 2;
// document.write(doubleSize);

// let size = 100;
// let doubleSize = size * 2;
// let minSize = (doubleSize * 2) - (size / 2);
// document.write(minSize);

// alert('Hello World');

// let favoriteInternationalFood = 'International: Pad Thai / ';
// let favoriteLocalFood = ' Local: Zwiebelrostbraten';
// document.write(favoriteInternationalFood);
// document.write(favoriteLocalFood);

// Der Backslash teilt JavaScript mit, dass das Symbol (hier die Anführungszeichen) 
// nicht als regulärer Code verarbeitet werden soll 
// let escapedText = "He said: \"Yes!\", that's for sure.";
// let escapedText2 = 'He said: "Yes!", that\'s for sure.';

// ----  Template Literals  ----------------------------------------------------------------------   Template Literals

// let names = 'John';
// let welcomeMessage1 = "Hello, I'm";
// let welcomeMessage2 = 'and I say to you: "Hello!"';
// // document.write(welcomeMessage1 + ' ' + names + ' ' + welcomeMessage2);

// console.log(`${welcomeMessage1} ${names} ${welcomeMessage2}`);

// let names = 'John';
// let age = 32;
// let message = `Hello!
// This is a longer message here.
// My name is: ${names},
// and I'm ${age}.`;

// document.write(message);

// ----  Complex Data Types - Objects  ----------------------------------------------------------------------  Objects

// let car = {
//     color: 'red',
//     mileage: 10
//   };
// >   car = Object
// >   Color = key (unique identifier)
// >   'red' = value

// ----  Using Dot Notation with Objects  ----------------------------------------------------------------------

// let annesAge = 27;
// let anne = {
//   name: 'Anne',
//   age: annesAge,
//   child: {
//     name: 'Joe',
//     age: 2
//   }
// };

// document.write(anne.age);

// ----  Using Square Brackets with Objects  ----------------------------------------------------------------------
// let currentUserName = 'sam';

// let userAges = {
//   anne: 27,
//   sam: 112,
//   megan: 97
// };

// userAges[currentUserName] = 113;
// document.write(userAges[currentUserName]);

// // ----  Arrays  ----------------------------------------------------------------------  Arrays
// let numberArray = [1, 2, 3];
// // or
// let numberArray2 = [
//   1,
//   2,
//   3
// ];
/*
// array of strings
let foodArray = ['pizza', 'tuna', 'apple'];

// array of objects
let carArray = [
  { type: 'Bus', wheels: 4, color: 'blue'},
  { type: 'Sport', wheels: 4, color: 'red'}
];

// array of arrays
let myCalculatorNumbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// mix of array all different data types 
let mixedArray = [
    1,
    'two',
    [1, 2, 3],
    { age: 5 }
  ];

*/
// ... andere Schreibweise
// let numberArray = [1, 2, 3];
// let mixedArray = [
//   1,
//   'two',
//   numberArray,
//   { age: 5 }
// ];

// document.write(numberArray[0]); // Outputs 1
// document.write(mixedArray[2][1]); // Accessing the nested array, Outputs 2

// You can also change a specific array element like so:
// mixedArray[1] = 2;

// let numberArray = [1, 2, 3];
// let mixedArray = [
//   1,
//   'two',
//   numberArray,
//   { age: 5 }
// ];

// numberArray[0]= 2;
// // This will overwrite the prior value with the new one:
// document.write(mixedArray[2][2]); // Outputs 2

// // ----  Differences Between Primitive & Complex Data Types  ----------------------------------------------------------------------  Arrays

let a = 1;
// The following line implies: copy the current value of `a`, then assign it to `b`
let b = a;
// console.log(a); // 1
// console.log(b); // 1
a = 2;
console.log(a); // 2
console.log(b); // still 1 since this is what was copied earlier