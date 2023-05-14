//Matchstick Houses
//1 - 6
//4 x 6 = 24
//87 x 6 =

function matchHouses(step) {
	if(step === 0){
    return 0;
  }else{
    return step * 6 - (step - 1);
  }

}
console.log(matchHouses(4));

function redundant(str){
  function inner(){
    return str;
  }
  return inner();
}

console.log(redundant('Mon Aéroplane'));

//function tetra(n){
//  return n+(n+1)(n+2)/6;
//}
//console.log(tetra(2));

//---------------------------------------

function countTrue(arr){
  let trueCount = 0;
  if(arr.length == 0){
    return 0;
  }else{
    arr.forEach((n)=>{
      if(n == true){
      trueCount++;
    }});
  }
  return trueCount;
}
const arr = [true, false, false, true, false];

console.log(countTrue(arr));
//-----------------------------------------
//Object to array
let langauges = {a:'JS',b:'HTML',c:'CSS'};
let newArr = [];
function toArray(obj) {
  for( const key in langauges ){
    newArr.push(langauges[key]);
    
  }
  return newArr;
}
console.log(toArray(arr));

//----------------------------------------

function addSufix(num){
  return (n) => { n + num };
}
let add10 = addSufix('ly');
add10('hopeless');
//----------------------------------------
function calculator (num1,num2,operator){
  if(num2 === 0) return "Can't divide by 0!";
  else  return eval(`${num1} + ${operator} + ${num2}`);
}

console.log(calculator(8,2,"+"));

//-----------------------------------------
/*
function makePlusFunction(baseNum) {
  return (n) => {n + baseNum};
}
const plusFive = makePlusFunction(5)
console.log(plusFive(2));
*/
function makePlusFunction(baseNum) {
  return function(x) {
    return x + baseNum;
  }
}

let plusTwo = makePlusFunction(2);
console.log(plusTwo(13));
//----------------------------------------------------


function parseCode(str) {
let newText = str.split('0');
let obj = {};
newText = newText.filter(n => n);
for(let n in newText){
Object.assign(obj, newText);
}
  return obj;
}

console.log(parseCode("John000Doe000123"));

/*

// Guessing game
// Source of instructions: https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/

// A user can enter a number
// The script picks a random number from 1 to 6
// If the user's number is equal to a random number, give the user 2 points
// If the user's number is different than the random number by 1,    give the user 1 point. Otherwise, give the user 0 points
// The user can play the game as long as they want to
// Functions should run asynchronously

function pickNum(userNum) {
let randNum = Math.floor(Math.random() * 6 + 1);
let pointsCounter = 0;
  
 if(userNum == randNum){
   pointsCounter+=2;
 }else if(userNum > randNum +1){
   pointsCounter+=1;
 }else{
   pointsCounter = 0;
 }
  console.log('Counter ' + pointsCounter + ' randNum ' + randNum);
  return pointsCounter;
}
console.log(pickNum(6));


const onMyBirthday = (isKayoSick) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isKayoSick) {
        resolve(2);
      } else {
        reject(new Error("I am sad"));
      }
    }, 2000);
  });
};

console.log(onMyBirthday(true));

*/

/*
// Burglary Series: Add its Name
// Source: https://edabit.com/challenge/9KEKJG5PZTFmG3Zau

// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs). 
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }
// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }
// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
// The value argument will be a number.
*/
function addName (obj, name, value){
  obj[name] = value;
  return obj;
}

console.log(addName({ piano: 500 }, "Brutus", 400));



/*
// Do All Bigrams Exist?
// Source of instructions: https://edabit.com/challenge/wQGGp6Qce6phDCvW9

// You are given an input array of bigrams, and an array of words.
// Write a function that returns true if every single bigram from this array can be found at least once in an array of words.

// Examples
// canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]) ➞ true
// canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]) ➞ false
// canFind(["th", "fo", "ma", "or"], ["the", "many", "for", "forest"]) ➞ true
// canFind(["oo", "mi", "ki", "la"], ["milk", "chocolate", "cooks"]) ➞ false

// A bigram is string of two consecutive characters in the same word.
// If the array of words is empty, return false.


const canFind = (arr1, arr2) => {
  
  for(let i = 0 ; i <= arr1.length;i++){
    for(){
      
    }
  }
  
};

console.log();

*/

function canFind(bigrams, words) {
    return bigrams.every((bigram) =>
        words.some((word) =>
            word.includes(bigram)
        )
    )
}
const bigrams = ["ay", "be", "ta", "cu"]; 
const words = ["maybe", "beta", "abet", "course"];
console.log(words.some((word) => word.includes("beta")));
console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]));