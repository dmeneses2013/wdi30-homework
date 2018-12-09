console.log("hihihihi");
/*Array and Functions Bonus Material
Define a function maxOfTwoNumbers that takes two numbers as arguments and returns
the largest of them. Use the if-then-else construct available in Javascript.
You'll have to remember your pre-work, or do some googling to figure this out.*/

const maxOfTwoNumbers = function (num1, num2){
  if (num1>num2){
    return num1;
  } else {
    return num2;
  }
};
console.log(maxOfTwoNumbers(1,2));
console.log(maxOfTwoNumbers(7,6));


/*Define a function maxOfThree that takes three numbers as arguments and returns
the largest of them.*/

const maxOfThree = function (a,b,c){
  if ( a > b && a > c ) {
    return a;
  } else if ( b > c ) {
    return b;
  } else {
    return c;
  }
};
console.log(maxOfThree(1,2,3));
console.log(maxOfThree(6,5,4));
console.log(maxOfThree(7,8,6));



/*Write a function that takes a character (i.e. a string of length 1) and returns
true if it is a vowel, false otherwise.*/

const isVowel = function (character){
  switch (character) {
    case 'a' :
    case 'e' :
    case 'i' :
    case 'o' :
    case 'u' :
      return true;
    default :
      return false;
    }
};

/*Define a function sumArray and a function multiplyArray that sums and multiplies
(respectively) all the numbers in an array of numbers. For example,sumArray([1,2,3,4])
should return 10, and multiplyArray([1,2,3,4]) should return 24.*/

const sumArray = function (arr) {
  let sum = arr [0];
  for (i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};


const multiplyArray = function (arr) {
  let multiplies = arr [0];
  for (i =1; i < arr.length; i++) {
    multiplies *= arr[i];
  }
  return multiplies;
};

/*Bonus
Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".*/

const reverseString = function (str) {
  const splitString = str.split ("");
  const reverseArray = splitString.reverse ();
  const joinArray = reverseArray.join ("");
  return joinArray;
};

// Write a function findLongestWord that takes an array of words and returns the
// length of the longest one.




// Write a function filterLongWords that takes an array of words and an number i
// and returns the array of words that are longer than i.
