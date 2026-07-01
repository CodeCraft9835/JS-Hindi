
//Number converion

let score = "33anc" // As we get to know that score  contains alpha-numeric number.
let score1 = null
let score2 = undefined
let score3 = true
console.log(typeof score); //output:String

let valueInNumber = Number(score) //here  we are converting score value in Number form 
let  value1 = Number(score1)
let value2 = Number(score2)
let value3 = Number(score3)
console.log(typeof valueInNumber); // Output :Number
console.log(valueInNumber);//output:NaN ,it means not a number , so we here we can see my JS is unable to convert the score in Number format , its an drawback of the JS language.

console.log(typeof value1);//Output : number
console.log(value1);//Output : 0 , it shows when we input null as value then js convert it into number as 0

console.log(typeof value2)//Output:number
console.log(value2); //output : NaN

console.log(value3);//Output: 1 , it means by converting boolean true or false value in JS into Number we get 1 and 0 respectivley.


/*

Conclusion of type conversion(into Number ):

"33" => 33
"33abc" => NaN
true => 1, false => 0

*/


//Boolean Coversion

let isLoggedIn = 1;
let isLoggedIn1 = "";
let isLoggedIn2 = "apurva"
let isLoggedIn3 = -5;

let booleanIsLoggedIn = Boolean(isLoggedIn)
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)

 console.log(booleanIsLoggedIn) // Output : true
 console.log(booleanIsLoggedIn1);//Output : false for empty string
 console.log(booleanIsLoggedIn2);//Output  : true for filled string
 console.log(booleanIsLoggedIn3);//Output : true for number greater than 1 not zero for 0 it will give false

 
 
 // "" => false
 //"Apurva" => true
 //Note " only for 0 we get value false otherwise for +ve or -ve negaticve values we get true"


 // String conversion

 let someNumber = 33
 let stringNumber = String(someNumber)
console.log(stringNumber) // output : 33
console.log(typeof stringNumber); // Coverted to string
