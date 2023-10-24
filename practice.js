/////////// I. Variables & Datatypes ////////////////
// A. Q + A
//1. How do we assign a value to a variable?
//==> We assign a variable with = operator.

//2.How do we change the value of a variable?
//==> We can assign a new value in order to change the first one.

//4.How do we assign an existing variable to a new variable?
//==> by using = operator
//5.Remind me, what are declare, assign, and define?
// ==> Declare means to create a data object and give it a name .
// ==> Assign means to set a value.

//6.What is pseudocoding and why should you do it?
// pseudocode is writing codes in plain English. It helps to improve the code.

//7.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

// B.strings
//Create a variable called firstVariable
let firstVariable;
//Assign it the value of the string "Hello World"

firstVariable = "Hello World";
//Change the value of this variable to some number

firstVariable = 22;
//Store the value of firstVariablein a new variable called secondVariable

let secondVariable = firstVariable;

//Change the value of secondVariableto any string.

secondVariable = "Hi there!";

//==> the value of firstVriable is 22.

//Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
let yourName = "Affaf";
let greet = "Hello, my name is" + yourName;
console.log(greet);

// c.Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false);
console.log(e === "Kevin");
console.log((a !== b) !== c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== "48");

//D. The farm

let animal = "cow";
if (animal === "cow") {
  console.log("mooooooo");
} else {
  console.log("Hey! you are not a cow");
}
//E.Driver's ED

// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let age = 18;
if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you are too young");
}

/////////////////////// II. Loops ////////////////////////////////////////

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

// for( let i=0; i<=10; i++){
//     console.log(i);
// }

// for( let a=10; a<=400; a++){
//     console.log(a);
// }
//  for( let x=12; x<=4000; x+=3){
//    console.log(x);
// }

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// for ( i=1; i<=100; i++){
//     console.log(i);
// }

// for( i=1; i<=100; i++){
//     if( i % 2 === 0){
//         console.log("<-- is an even number");
//     }
// }

// C. Give me Five

// for ( i=0; i<=100; i++){
//     if (i % 5 === 0) {
//         console.log("I found a " + i + ". High five!");
//     }
//     if (i % 3 === 0) {
//         console.log("I found a " + i + ". Three is a crowd");
//     }
// }

// D. Savings account

// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

// let bank_account= 0;
// for ( i=1; i<=10; i++){
//     bank_account += i;
// }
// console.log( bank_account + "$")

// let bank_account= 0;
// for ( i=1; i<=100; i++){
//     bank_account += i * 2;
// }
// console.log( bank_account + "$")

/////////////////////////////III. Arrays & Control flow ///////////////////////////////////

// A. Talk about it:
// What are the things in an array called?

//==> elements.

// Do Arrays guarantee those things will be in order?

//==> yes.
// What real-life thing could you model with an array?
//==> any list or ordered collection of data.

//B. Easy Does It

const quotes = ["quote1", "quote2", "quote3"];

//C. Accessing elements
const randomThings = [1, 10, "Hello", true];
//How do you access the 1st element in the array?
console.log(randomThings[0]);
//Change the value of "Hello"to "World" /Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

randomThings[2] = "World";
console.log(randomThings);

//D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

//What would you write to access the 3rd element of the array?

console.log(ourClass[2]);

//Change the value of "Github" to "Octocat"

ourClass[4] = "Octocat";
//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log(ourClass);

//E. Mix It Up

const myArray = [5, 10, 500, 20];

//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.

myArray.push("Aegon", "name");
console.log(myArray);
//Remove the 5from the beginning of the array.
myArray.shift();
console.log(myArray);

//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);

//Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

myArray.reverse();
console.log(myArray); //>>> it changes the order

//F. Biggie Smalls

// let number= 60;

// if ( number< 100){
//     console.log("little number");
// }
// if ( number >= 100){
//     console.log("big number");
// }

//G. Monkey in the Middle

// const number= 5;
// if (number < 5) {
//     console.log("little number");
//   } else if (number > 10) {
//     console.log("big number");
//   } else {
//     console.log("monkey");
//   }

//H. What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

//   What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");

// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
thomsCloset[0][0];
thomsCloset[1][1];
thomsCloset[2][1];

// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(
  "Thom is looking fierce in a " +
    thomsCloset[0][0] +
    ", " +
    thomsCloset[1][1] +
    " and " +
    thomsCloset[2][1] +
    "!"
);

// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";

//////////////////////////////////////////////// IV. Functions ///////////////////////////////////////////////////////////

//A. printGreeting

const printGreeting = (name) => {
  return "Hello there ," + name + "!";
};
console.log(printGreeting("Slimer"));

// B. printCool

//Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

const printCool = (name) => {
  return name + "is cool";
};
console.log(printCool("Captain Reynolds"));

//C. calculateCube

function calculateCube(number) {
  return number * number * number;
}
console.log(calculateCube(5));

//D. isVowel

function isVowel(symbol) {
  if (
    symbol === "a" ||
    symbol === "A" ||
    symbol === "e" ||
    symbol === "E" ||
    symbol === "i" ||
    symbol === "I" ||
    symbol === "o" ||
    symbol === "O" ||
    symbol === "u" ||
    symbol === "U"
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(isVowel("b"));

//E. getTwoLengths
//Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

function getTwoLengths(string1, string2) {
  return [string1.length, string2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

//getMultipleLengths
//Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

function getMultipleLengths(array) {
  const lengths = [];
  for (let i = 0; i < array.length; i++) {
    lengths[i] = array[i].length;
  }
  return lengths;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//G. maxOfThree

const maxOfThree = function (x, y, z) {
    if (x > y && x > z) {
      return x;
    } else if (y > x && y > z) {
      return y;
    } else {
      return z;
    }
  }
  console.log(maxOfThree(6, 9, 1));

  //H. printLongestWord
//  const printLongestWord = function (arr){
//    let longest ="";
//    for (const word of arr) {
//     if ( word.length > longest.length){
//         longest = word;
//     }
// }
// return longest;
//  }
//  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

function printLongestWord(array) {
    let longest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (longest.length < array[i].length) {
        longest = array[i];
      }
    }
    return longest;
  }
  
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
  
  ////////////////////////////////////////////// Objects ///////////////////////////////////////////////////////////////////


// A. Make a user object
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

const user = {
    name:"Affaf",
    email:"xxx@gmail.com",
    age:"28" ,  
    purchased:[],

}
//B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
user.email="yyy@gmail.com"
user.age++
// console.log(user)
//C. Adding keys and values

user.location="Chicago"

// D. Shopaholic!
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

//E. Object-within-object

user.friend = {
    name: "Grace Hopper",
    age: 85,
    location: "NewYork",
    purchased:[],
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age= 55 
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user.friend.purchased[1]);

//F. Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for (let i = 0; i < user.purchased.length; i++) {
    console.log(user.purchased[i]);
  }
  for (let i = 0; i < user.friend.purchased.length; i++) {
    console.log(user.friend.purchased[i]);
  }

//   G. Functions can operate on objects

function oldAndLoud(person){
   person.age++;
   person.name= person.name.toUpperCase();
}
const person2 = {
    name: "Joury",
    age: 5,
  };
oldAndLoud(person2);
console.log(person2);