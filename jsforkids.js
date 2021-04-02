var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

console.log(randomBodyPart)

var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

console.log(randomAdjective)

var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)]; //*3 or randomWords.length is the same, the latter is beter bc if the array changes, you do not have to adjust the "3"
console.log(randomWord)

var randomInsult = "Your" + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!";

console.log(randomInsult);
"YourHair is like a Boring Fly!!"