function sayName(){
    console.log("Apurva");
    
}
sayName()

// Add 2 numbers

function addTwoNumbers(number1 , number2){ // here  number1 and number2 are called as parameters
    console.log(number1 + number2);
   
}
// 1,2 are called as arguments
addTwoNumbers(1,2); // Output : 3
addTwoNumbers(3,"4")// Output : 34
addTwoNumbers(3,"a")// Output : 3a
addTwoNumbers(3,null)// Output :3

const result = addTwoNumbers(2,3);
console.log("Result :", result); //Output:- Result : undefined , because it doesn't mean that our function will ging to return value automatically so , thats why it shows undefined in oreder to return the value we use return staemnet


function addThreeNumbers(number1 , number2 ,number3){
    
    console.log("Apurva Dutta"); //Output : Apurva Dutta
    
    return (number1 + number2 + number3)
    console.log("Apurva");  // It will never be printed , because there is rule in functions that after return nothing will be going to be print after it , only statements written above of return statement is going to be printed 
    
}

const answer = addThreeNumbers(1,2,3)
console.log("Answer :",answer); //Output :-  Answer : 6


function loginUserMessage(username){
    return `${username} just logged in .`
}

console.log( loginUserMessage("hitesh")); // Output :hitesh just logged in .

console.log(loginUserMessage()); // VVI for interview  , Output : undefined just logged in .



function calculateCartPrice( num1){
    return num1
}

console.log(calculateCartPrice(200));

// For example , we are developing a logic for shopping cart so in that user acn add multiple items in it so we can add many items , we cnat predict how much , so in that same way in order to store  these values we dont know how much variables are required for it 
// In order to solve the probelm , I use ... operator called as  Rest operator when used in function but same ... operator is called as spread operator when used in array
function calculateCartPriceAmazon(...number){
    return number
}

console.log(calculateCartPriceAmazon(100,200,500,900)); // Output : [ 100, 200, 500, 900 ] , numbers stored in array form


// Interview VVI 

function calculateCartPriceFlipcart(value1, value2 , ...number){
    return number
}
 console.log(calculateCartPriceFlipcart(100,200,300,400,500)); // Output : [ 300, 400, 500 ] , so it shows that first 2 values get stored inside 2 variables value1 , value2 which are defined prior to number

 
 const user  = {
    username : "Apurva",
    price : "899"
 }
 function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
 }
 
 handleObject(user) // Output : Username is Apurva and price is 899

 // or we can also pass direct object without creating first 

 handleObject({
    username :" Sonu ",
    price : 8999
 }) // Output : Username is  Sonu  and price is 8999


 const myNewArray = [200 , 400 ,100 ,600]
 function returnSecondValue(getArray){
    return getArray[1] //returning second element f the array
 }
 console.log(returnSecondValue(myNewArray)); // Output : 400
  // or we can pass array directly in function
   console.log(returnSecondValue([200 , 400 ,500 ,1000])); // Output : 400
   
   
 