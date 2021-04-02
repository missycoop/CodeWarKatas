// Variables hold reusable data in a program and associate it with a name.
// Variables are stored in memory.
// The var keyword is used in pre-ES6 versions of JS.
// let is the preferred way to declare a variable when it can be reassigned, and const is the preferred way to declare a variable with a constant value.
// Variables that have not been initialized store the primitive data type undefined.
// Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
// The + operator is used to concatenate strings including string values held in variables
// In ES6, template literals use backticks ` and ${} to interpolate values into a string.
// The typeof keyword returns the data type (as a string) of a value.

//WORKING THERMOMETER : KELVIN WEATHER
//todays forecast in Kelvin
const kelvin = 283;
//celcius is always 273 less than kelvin
const celsius = kelvin - 273;
//equation to calculate Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
//to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


//DOG AGE CONVERSION
//my age
const myAge = 38;
//early years
let earlyYears = 2;
earlyYears *= 10.5;
//to account for 1st 2 years that is * 10.5
let laterYears = myAge - 2;
//by 4 to calculate the number of dog years accounted for by your later years
laterYears *= 4;
//combine the first yrs with yrs after 2
let myAgeInDogYears = earlyYears + laterYears;
let myName = 'Missy'.toLowerCase();
//print sentence that converts my age to dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);



//Conditionals
// An if statement checks a condition and will execute a task if that condition evaluates to true.
// if...else statements make binary decisions and execute different code blocks based on a provided condition.
// We can add more conditions using else if statements.
// Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
// The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
// The logical operator ||, or “or”, checks if either provided expression is truthy.
// The bang operator, !, switches the truthiness and falsiness of a value.
// The ternary operator is shorthand to simplify concise if...else statements.
// A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement.

let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

//ternary refactoring
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");



//MAGIC EIGHTBALL
let userName = ''; {
    userName ? console.log('true') : 
    console.log('false');
  }
  const userQuestion = ''; 
  console.log(`The user asked: ${userQuestion}`);
  const randomNumber = Math.floor(Math.random() * 8);
  let eightBall = '';
  switch (randomNumber){
    case 0:
    eightBall = 'It is certain';
    break;
     case 1:
    eightBall = 'It is decidely so';
    break;
     case 2:
    eightBall = 'Reply hazy try again';
    break;
     case 3:
    eightBall = 'Cannot predict now';
    break;
     case 4:
    eightBall = 'Do not count on it';
    break;
     case 5:
    eightBall = 'My sources say no';
    break;
     case 6:
    eightBall = 'Outlook not so good';
    break;
     case 7:
    eightBall = 'Sign point to yes';
    break;
     case 8:
    eightBall = 'It is certain';
    break;
  }
  console.log(eightBall);