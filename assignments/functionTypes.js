// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number into string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
//Function Declaration:
function addOne(n) {
  return(n+1);
}
//Function Expression:
let addOne=function(n) {
  return(n+1);
}
// Arrow Function
let addOne = n => (n+1);

// Arrow Function With Curly Bracket

let addOne =(n) => {
  return (n+1);
}

//Function Invocation:
addOne(5)//6

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
  //Function Declaration:
  function minus(n) {
    return(n-1);
  }
  //Function Expression:
  let minus=function(n){
    return (n-1);
  }
  //Arrow Function:
   let minus = n => (n-1);

  //Arrow function with curley Bracket:
   let minus =  (n) => {
    return (n-1);
  }
    // Function Invocation:
    minus(5)//4

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
  //Function Declaration:
  function sum(x,y) {
    return(x+y);
  }
  //Function Expression:
  let sum=function(x,y){
    return (x+y);
  }
  //Arrow Function:
  let sum = (x,y) => (x*y);
  //Arrow function with curley Bracket:
   let sum = (x,y) => {
    return x*y;
   }


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
   //Function Declation:
    function sub( x,y){
      return x-y;
    }

    //Function Expression:
    let sub= function sub(x,y){
      return x-y;
    }

    //Arrow Fumction:
    let sub = (x,y) =>(x-y);

    //Arrow function with curley Bracket:
     let sub =  (x,y) =>{
        return x-y;
     }
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 //Function Declaration:
 function prod(x,y) {
  return(x+y);
}
//Function Expression:
let prod=function(x,y){
  return (x+y);
}
//Arrow Function:
let prod = (x,y) => (x*y);

//Arrow function with curley Bracket:
 let prod = (x,y) => {
  return x*y;
 }

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
//Function Declaration:
function quotient(x,y) {
  return(x/y);
}
//Function Expression:
let quotient=function(x,y){
  return (x/y);
}
//Arrow Function:

let quotient = (x,y) => (x/y);

//Arrow function with curley Bracket:

 let quotient = (x,y) => {
  return x/y;
 }

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

  //Function Declaration:
  function square(x) {
    return(x*x);
  }
  //Function Expression:
  let square=function(x){
    return (x*x);
  }
  //Arrow Function:
  let square = (x) => (x*x);

  //Arrow function with curley Bracket:
  let square = (x) => {
    return x*x;
  }

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
    //Function declaration:
    function calc(operation, x, y){
      if(operation === "+"){
        return x + y;
      } else if (operation==="-"){
        return x-y;
      } else if (operation==="*"){
        return x*y;
      } else (operation==="/")
        return x/y;
    }

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */ 
//function declation:
function larger(a,b){
  return Boolean(a>b);
}
//function expression:
let larger=function (a,b){
  return Boolean(a>b);
}
//arrow function:
let larger=(a,b)=> Boolean(a>b);
//Arrow function with curley Bracket:
let larger=(a,b) =>{
  return Boolean(a,b);
}
 
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
//function declation:
function smaller(a,b){
  return Boolean(a<b);
}
//function expression:
let smaller=function (a,b){
  return Boolean(a<b);
}
//arrow function:
let smaller=(a,b)=> Boolean(a<b);
//Arrow function with curley Bracket:
let smaller=(a,b) =>{
  return Boolean(a<b);
}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
//function declation:
function equals(a,b){
  return Boolean(a=b);
}
//function expression:
let equals=function (a,b){
  return Boolean(a=b);
}
//arrow function:
let equals=(a,b)=> Boolean(a=b);
//Arrow function with curley Bracket:
let equals=(a,b) =>{
  return Boolean(a=b);
}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
  function smallest(a,b) {
  var c = Math.min(a, b);
  return c;
  }
 
/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
//Function Declaration:
    function largest(a,b) {
      var c = Math.max(a, b);
      return c;
      }
    
// Function expression:
let largest= function(a,b) {
  var c = Math.max(a, b);
      return c;
}
//Arrow function with curley bracket:
let largest = (a,b) => {
  var c = Math.max(a, b);
      return c;
}


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
      //Function declation:

      function even(n){
        return Boolean(n%2==0);
      }
  //function expression:
        let even= function(n){
          return Boolean(n%2==0);
        }
      
    //arrow function:
    let even= (n) =>Boolean(n%2==0);
    //Arrow function with curly brackets:
    let even= (n) =>{
      return Boolean(n%2==0);
    }

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
 //Function declation:
    function odd(n){
    return Boolean(n%2==1);
  }
  //Function expression:
  let odd=function (n){
    return Boolean(n%2==1);
  }
  //Arrow function:
  let odd=(n)=>Boolean(n%2==1);
  //Arrow function with curley brackets:
  let odd=(n)=>{
    Boolean(n%2==1);
  }

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
//Function Declaration:
 function grade(score,total){
   if (score>=90 && score<100){
   return "A";
  } else if(score>=80 && score<90){
    return "B";
  } else if (score>=70 && score<80){
    return "C";
  } else if (score>=60 && score<70){
    return "D";
  } else (score>=59)
    return "F";
}
//Function Expression:
let grade=function(score,total){
    if (score>=90 && score<100){
   return "A";
  } else if(score>=80 && score<90){
    return "B";
  } else if (score>=70 && score<80){
    return "C";
  } else if (score>=60 && score<70){
    return "D";
  } else (score>=59)
    return "F";
}
//Arrow Function with curley bracket:

let grade=(score,total) => {
  if (score>=90 && score<100){
    return "A";
   } else if(score>=80 && score<90){
     return "B";
   } else if (score>=70 && score<80){
     return "C";
   } else if (score>=60 && score<70){
     return "D";
   } else (score>=59)
     return "F";
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
  //Function Declaration:
  function stringConcate(word1,word2){
    let c = word1 + " " +word2;
    return c;
  }
  //Function Expression:
  let stringConcate=function(word1,word2){
    let c = word1 + " " +word2;
    return c;
  }
