// EVEN OR ODD 8: Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
        if (number % 2 == 0) {
              return "Even";
            } else {
              return "Odd";
            }
          }
//or 
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }

  //FEB2021
// Convert a Number to a String: We need a function that can transform a number into a string.What ways of achieving this do you know?
function numberToString(num) {
  let numberToString =  num.toString();
    return numberToString
  }

  // REVERSE A STRING: Complete the solution so that it reverses the string passed into it.

  function solution(str){
    return str.split("").reverse().join("");
   }

  //  STING REPEAT: Write a function called repeat_str which repeats the given string src exactly count times.
   function repeatStr (n, s) {
    if (n < 1) return '';
     var  repeatStr = '';
     while (n > 1) {
         if (n & 1)  repeatStr += s;
         n >>= 1, s += s;
     }
     return  repeatStr + s;
 }
 //BETTER ^ 
 function repeatStr (n, s) {
  return s.repeat(n);
}



// Remove First and Last Character: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
function removeChar(str){
  var result = str.slice(1,-1);
    return result
  }
  //or ^
  const removeChar = str => str.slice(1,-1)


  // Convert boolean values to strings 'Yes' or 'No': Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
 
    if (bool === true){
      return "Yes";
  }else { 
     return "No";
  }


//OR: 
function boolToWord( bool ){
return bool ? 'Yes':'No';}


// Remove String Spaces: Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
  return ( x.split(' ').join('') );
}

// We need a function that can transform a string into a number. What ways of achieving this do you know?

var stringToNumber = function(str){
  let parsed = parseInt(str);
    return parsed;
  }

  // SUM ARRAY: Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

  function sum (numbers) {
    var total = 0;
        for (i = 0; i < numbers.length; ++i) {
             total += numbers[i]; // add each element in an array to total
        }
        return total;
  }