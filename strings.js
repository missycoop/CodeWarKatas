// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }

  //refactored:
  const getCount = str => str.replace(/[^aeiou]/g, '').length;




//   Trolls are attacking your comment section!

//   A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
  
//   Your task is to write a function that takes a string and return a new string with all vowels removed.
  
//   For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
  
//   Note: for this kata y isn't considered a vowel.

  const disemvowel = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let newStr = '';
    for (let i = 0; i <= str.length; i++) {
      let char = str.charAt(i);
      if (vowels.indexOf(char) == -1) {
        newStr += char;
      }
    }
      return newStr;
      
    
  };

//refactor:
const disemvowel = str => str.replace(/[aeiou]/ig, '');





// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
     str1 = str.split('');
     str1.shift();
     str1.pop();
     return str1.join('');
       
   };
   
//refactor:
const removeChar = str => str.slice(1,-1)

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    var maskedString = "";
    for(var i = 0; i < cc.length; i++) {
      if(i < cc.length - 4) {
        maskedString = maskedString + "#";
      } else {
        maskedString = maskedString + cc.charAt(i);
      };
    }
    return maskedString;
  }

  //refactor:
  const maskify = cc => cc.slice(-4).padStart(cc.length, '#')


//   Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {
        if(array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
        }
      }
    }
    return sortedArray.join(' ');
  }

  //refractor:
  const order = w => w.split(' ').sort((a, b) => /\d/.exec(a) - /\d/.exec(b)).join(' ');

 


//   Simple, remove the spaces from the string, then return the resultant string.
  function noSpace(x){
    let arr =  x.split(' ');
    return arr.reduce((a,b)=>a+b);
   }

   //refactor:
   const noSpace=x=>x.split(" ").join("");
