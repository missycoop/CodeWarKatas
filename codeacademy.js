
// ARRAYS:
// Let’s find the index of a particular element in groceryList using .indexOf().

// Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.

// Then log pastaIndex to the console. (You may remove the other console.log() statements to declutter the terminal.)

// Read about .indexOf() at MDN’s indexOf documentation.



const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift()

groceryList.unshift('popcorn')

const pastaIndex = groceryList.indexOf('pasta');

console.log(pastaIndex)

// Let’s make a nested array! Create a variable numberClusters. Assign as its value an array with three array elements.

// The first array element should hold the elements 1 and 2 in that order.
// The second array element should hold the elements 3 and 4 in that order.
// The third array element should hold the elements 5 and 6 in that order.

let numberClusters = [[1, 2],[3, 4],[5, 6]];

// Now declare a variable named target using the const keyword and assign to access the element 6 inside numberClusters.
const target = numberClusters[2][1]

// we learned these concepts regarding arrays:

// Arrays are lists that store data in JavaScript.
// Arrays are created with brackets [].
// Each item inside of an array is at a numbered position, or index, starting at 0.
// We can access one item in an array using its index, with syntax like: myArray[0].
// We can also change an item in an array using its index, with syntax like myArray[0] = 'new string';
// Arrays have a length property, which allows you to see how many items are in an array.
// Arrays have their own methods, including .push() and .pop(), which add and remove items from an array, respectively.
// Arrays have many methods that perform different tasks, such as .slice() and .shift(), you can find documentation at the Mozilla Developer Network website.
// Some built-in methods are mutating, meaning the method will change the array, while others are not mutating. You can always check the documentation.
// Variables that contain arrays can be declared with let or const. Even when declared with const, arrays are still mutable. However, a variable declared with const cannot be reassigned.
// Arrays mutated inside of a function will keep that change even outside the function.
// Arrays can be nested inside other arrays.
// To access elements in nested arrays chain indices using bracket notation.
// Learning how to work with and manipulate arrays will help you work with chunks of data!


// LOOPS: 

// Create a program that loops from 5 to 10 and logs each number to the console.for (let counter = 5; counter < 11; counter++) {
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
  } 
  
//   Make a for loop that loops backwards printing 3 to 0 to the console. Use the >= comparison operator in your stopping condition and the -- operator in your iteration statement.
  // The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
  }

//   Write a for loop that iterates through our vacationSpots array using i as the iterator variable.

// Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console.
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i=0; i < vacationSpots.length; i++){
  console.log('I would love to visit ' + (vacationSpots[i]))
}
  
// Log each element from rapperArray in a for loop with the iterator variable i.
// 2.
// After the for loop, log the string "And if you don't know, now you know." to the console. Note: since there’s a single quote character, ', in our string, we can use double quotes around the string to make sure character prints.
// 3.
// Add a break inside your loop’s block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'.
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");
// In this lesson, we learned how to write cleaner code with loops. You now know:

// Loops perform repetitive actions so we don’t have to code that process manually every time.
// How to write for loops with an iterator variable that increments or decrements
// How to use a for loop to iterate through an array
// A nested for loop is a loop inside another loop
// while loops allow for different types of stopping conditions
// Stopping conditions are crucial for avoiding infinite loops.
// do...while loops run code at least once— only checking the stopping condition after the first execution
// The break keyword allows programs to leave a loop during the execution of its block

//HIGHER ORDER Functions:
// Save a variable, time2p2. Assign as its value the result of invoking the timeFuncRuntime() function with the checkThatTwoPlusTwoEqualsFourAMillionTimes() function.
// Write a higher-order function, checkConsistentOutput(). This function should have two parameters: a function and a value. It should call the argument function with the value two times. If the callback function produces the same result twice, it should return the result of the function call, otherwise, it should return the string 'This function returned inconsistent results'
// Invoke your checkConsistentOutput() with the addTwo() function we wrote and a number as arguments.
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};

checkConsistentOutput(addTwo, 10);

// Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango.

// You may use any form of callback you prefer.
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruitItem) { 
  console.log('I want to eat a ' + fruitItem);
});

//MAP

// Add your code under the animals array and before the line console.log(secretMessage.join(''));

// Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.
// Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)


//FILTER
// Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.
// Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(randomNumbers => {
  return randomNumbers < 250
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below

const longFavoriteWords = favoriteWords.filter(favoriteWords => {
  return favoriteWords.length > 7
});

//FINDINDEX()
// Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});


// Iterator Documentation


const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length > 5}));


// Choose the Right Iterator - ANKI!!!!


const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
// OR nums.some(num => num < 0);


// REVIEW:
// .forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
// .map() executes the same code on every element in an array and returns a new array with the updated elements.
// .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
// .findIndex() returns the index of the first element of an array which satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
// .reduce() iterates through an array and takes the values of the elements and returns a single value.
// All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.



//OBJECTS

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold'; //reassigned property
spaceship['numEngines'] = 5; //added property & value
delete spaceship['Secret Mission']; //deleted property


// When the data stored on an object is a function we call that a method. A property is what an object has, while a method is what an object does.


// Below the retreatMessage variable in the code editor, create an alienShip object. It should contain a method .retreat() which will console.log() the retreatMessage.


// Add another method to your object literal. This method, .takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.***Don’t forget to separate your methods with commas just as you would any other key-value pairs:

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};
alienShip.retreat();
alienShip.takeOff();


//nested objects
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
//assigned capFave to equal the captain's fav food
let capFave = spaceship.crew.captain['favorite foods'][0];
//assigned an array as a value 
spaceship.passengers = [{name: 'Morty'}]
//created a variable with the value of the 0th index of the new property
let firstPassenger = spaceship.passengers[0] 


//iterating through an object
let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

// Write your code below

for (let crewMember in spaceship.crew) {
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};

// how to use the this keyword.
// conveying privacy in JavaScript methods.
// defining getters and setters in objects.
// creating factory functions.
// using destructuring techniques.

const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() { 
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());

// The this keyword references the calling object which provides access to the calling object’s properties. In the example above, the calling object is robot and by using this we’re accessing the robot object itself, and then the provideInfo property of robot by using property dot notation.


// avoid using arrow functions when using this in a method!

// JavaScript developers follow naming conventions that signal to other developers how to interact with a property. One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered. 

// Getters
// Getters are methods that get and return the internal properties of an object. But they can do more than just retrieve the value of a property! Let’s take a look at a getter method:

const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// GETTER - To call the getter method: 
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// To call the getter method: 
// person.fullName; // 'John Doe'
// Notice that in the getter method above:

// We use the get keyword followed by a function.
// We use an if...else conditional to check if both _firstName and _lastName exist (by making sure they both return truthy values) and then return a different value depending on the result.
// We can access the calling object’s internal properties using this. In fullName, we’re accessing both this._firstName and this._lastName.
// In the last line we call fullName on person. In general, getter methods do not need to be called with a set of parentheses. Syntactically, it looks like we’re accessing a property.
// Now that we’ve gone over syntax, let’s discuss some notable advantages of using getter methods:

// Getters can perform an action on the data when getting a property.
// Getters can return different values using conditionals.
// In a getter, we can access the properties of the calling object using this.
// The functionality of our code is easier for other developers to understand.
// Another thing to keep in mind when using getter (and setter) methods is that properties cannot share the same name as the getter/setter function. If we do so, then calling the method will result in an infinite call stack error. One workaround is to add an underscore before the property name like we did in the example above.


const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);

// Setters
// Along with getter methods, we can also create setter methods which reassign values of existing properties within an object. Let’s see an example of a setter method:
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
// Notice that in the example above:

// We can perform a check for what value is being assigned to this._age.
// When we use the setter method, only values that are numbers will reassign this._age
// There are different outputs depending on what values are used to reassign this._age.
// Then to use the setter method:

person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age

// Setter methods like age do not need to be called with a set of parentheses. Syntactically, it looks like we’re reassigning the value of a property.

// Like getter methods, there are similar advantages to using setter methods that include checking input, performing actions on properties, and displaying a clear intention for how the object is supposed to be used. Nonetheless, even with a setter method, it is still possible to directly reassign properties. For example, in the example above, we can still set ._age directly:

person._age = 'forty-five'
console.log(person._age); // Prints forty-five

// Factory Functions
// So far we’ve been creating objects individually, but there are times where we want to create many instances of an object quickly. Here’s where factory functions come in. A real world factory manufactures multiple copies of an item quickly and on a massive scale. A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned.

// Let’s say we wanted to create an object to represent monsters in JavaScript. There are many different types of monsters and we could go about making each monster individually but we can also use a factory function to make our lives easier. To achieve this diabolical plan of creating multiple monsters objects, we can use a factory function that has parameters:

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

// In the monsterFactory function above, it has four parameters and returns an object that has the properties: name, age, energySource, and scare(). To make an object that represents a specific monster like a ghost, we can call monsterFactory with the necessary arguments and assign the return value to a variable:

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

// Now we have a ghost object as a result of calling monsterFactory() with the needed arguments. With monsterFactory in place, we don’t have to create an object literal every time we need a new monster. Instead, we can invoke the monsterFactory function with the necessary arguments to take over the world make a monster for us!

