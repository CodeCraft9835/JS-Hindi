/* 

// Interview most important questions 


Datatypes in JS are o ftwo types:

i-Primitive type
ii-Non- primitive  or refernce type


Primitive type:

Are of 7 types

String , Number , Boolean , null , undefined , symbol , BigInt


Non-Primitive or Refernce type :

Arrays , Objects , Functions 


Note : JS is a dynamically type language 

This means that you do not need to explicitly declare a variable's data type when creating it, and the interpreter assigns a type at runtime based on its current value. Furthermore, a single variable can change its data type throughout the execution of your program


*/

// Symbol in JavaScript is a built-in primitive data type introduced in ES6 (ECMAScript 2015) that represents a guaranteed unique and immutable identifier
const id = Symbol('123')// Symbol datatype reperesents unique value
const anotherId= Symbol('123')
console.log(id == anotherId);// false

//BigInt

const bigNumber = 37473489723209838n;
console.log(bigNumber)


//Refernce (non-primitive type)
// Arrays , Objects , Functions

const heros = ["shaktiman", "nagaraj","doga"] //Array

let myObj = {
    name : "Apurva",
    age : 19,
} // Object

//Function
const myfunction = function(){
    console.log("hello world");
    
}

console.log(typeof bigNumber);//bigint
console.log(typeof myfunction);//function
console.log(typeof myObj);//object
console.log(typeof heros);//object
console.log(typeof id);//symbol

// Go through Ecma scrpit typeof method





