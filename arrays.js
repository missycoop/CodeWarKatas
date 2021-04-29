// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.
// You can assume all values in the array are numbers.

function smallEnough(a, limit){
    for(var i of a){
      if(i > limit)
        return false;
    }
    return true;
  }

  //refactored:
  function smallEnough(array, limit){
    return array.filter( (value) => value > limit ).length > 0 ? false : true;
}


// Description:
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example:
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    return '(' + numbers[0] + numbers[1] + numbers[2] + ') ' + numbers[3] + numbers[4] + numbers[5] + '-' + numbers[6] + numbers[7] + numbers[8] + numbers[9];
  }

  //refactored:
  function createPhoneNumber(numbers){
    return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
 }


//  Description:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }

  //refactored: 
  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }

  //or

  const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(s => s).length;


//   Description:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

const digitize = (x) => {
    x = `${x}`.split('').reverse();
    let a = []
    for(let i = 0; i < x.length; i++){
      a.push(+x[i])
    }
    return a
  }

  //refactor:
  function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }


//   Description:
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

function fixTheMeerkat(arr) {
    return [arr[2], arr[1], arr[0]];
  }

  //or:
  const fixTheMeerkat = arr => arr.slice().reverse();


//   Description:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
    var num = 0;
    for (var i = 0, exponent = 3; i < arr.length; i++) {
      if (arr[i]) {
        num += Math.pow(2, exponent);
      }
      exponent--;
    }
    return num;
  };

  //or:
  const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);
