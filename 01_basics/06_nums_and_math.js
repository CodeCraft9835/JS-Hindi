const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString());
console.log(typeof balance);
console.log(balance.toFixed(2));// used for set precission value of decimal use widley in making e commerce platform

const othername =  1123.8966
console.log(othername.toPrecision(3)); // Learn more about it do mdn interview important

const hundreds = 1000000 
console.log(hundreds.toLocaleString('en-IN')); // do mdn

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");


//+++++++++++++ Maths in JS ++++++++++++++++++++++

//Maths library come by default in js

console.log(Math); // more detail you will get in  inspect browser

console.log(Math.abs(-5)); // Changes negative to postive and postive remains positive only
console.log(Math.round(4.55)); // Round off
console.log(Math.ceil(4.95));//ceil means top value it gives larger value gives 5 as output
console.log(Math.floor(4.55)); // it will take small value that is 4 ignore 5 floor means low level
console.log(Math.max(3,-6,6,78));
console.log(Math.min(-6,8,97,0));


console.log(Math.random()); // vvvi , gives value always  from 0 to 1 in decimal form

console.log((Math.random()*10) + 1); // Gives value from  1 to 9 range but in decimal form
console.log(Math.floor(Math.random()*10)+1); // Math.floor use to roundoff the value and it gives the number in interger form within the range of 0 to 1



// Try to understand this formula very important

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min); // vvi





