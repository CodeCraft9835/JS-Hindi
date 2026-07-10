//Dates

let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());

//VVI for interview
console.log(typeof myDate); // interview output : object



console.log("********************");
// let myCreatedDate = new Date(2023, 0 ,23) // Note :  In JS month start from 0 in JS so here  0 means Januarary
// let myCreatedDate = new Date(2026,1,26,4,8,5)
//let myCreatedDate = new Date("2006-04-16")
let myCreatedDate = new Date("04-16-2006")
//let myCreatedDate = new Date("16-04-2006") // NOT VALID DONT USE
//console.log(myCreatedDate);
 //console.log(myCreatedDate.toDateString());

 let myTimeStamp = Date.now();// vvi
 //console.log(myTimeStamp);
 //console.log(myCreatedDate.getTime());
 
 //console.log(Math.floor(Date.now()/1000)); // important for interview we are converting date.now into seconds using Math.floor and dividing it using 1000

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);// +1 because JS starts jan as o 




 
 
 


