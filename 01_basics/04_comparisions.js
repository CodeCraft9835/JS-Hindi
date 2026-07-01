console.log(2>1); //Output : true
console.log(2 >= 1);// true
console.log(2 < 1);// false
console.log(2 == 1); // false
console.log(2 != 1); //  true

//Cmparisions of disimilar datatypes 
/* 
Note : Comparing disimilar datatypes in JS is very difficult
they may lead to confusion so in most time we avoid such things
*/

console.log("2" > 1); //true
console.log("02" > 1); //true

console.log( null > 0);// false
console.log( null == 0);//false
console.log(null >= 0);//true

/*
The reason is that an equality check == and comparisions > < >=  <= work differntly.
Comparisons convert null to a number , treating it as 0.

that's why null >= 0 is true and null > 0 is false

*/

console.log(undefined == 0);// false
console.log(undefined > 0);// false
console.log(undefined < 0);// false


// Strict check "===" it is not comparing values but a data type also

console.log("2" === 2); // false
console.log();












