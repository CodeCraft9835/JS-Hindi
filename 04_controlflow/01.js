//if statement
 if(true){
    //If the condtion the true than if bock code execute otherwise staemnts beyong if scope is goin to run
    console.log("hello world");
    
 }

 // Comparsion operators - > , < , <= ,>= , == , != , === , !==
  // Diiffernce between ==  , ===
  // == chaeck the value only not type
  // but === check value as well as type of the data

const temprature = 88;

if(temprature === 41){ // If condition true then the statement written inside the if block is ging to be executed
    console.log(true);
    
}else{ // if the condtion get false then this else block statement is going to be executed
    console.log(false);
    
}
// Outside the loop statements is going to be executed always in any case
console.log("This statement always run ");




// Scope related things in JS

const score = 200

if( score > 100){
    const power = "fly"
    console.log(`User power : ${power}`); // Output : User power : fly
    
}
//console.log(`User power : ${power}`); // Output : ReferenceError: power is not define , as we define power inside if scope so its accesible inside the if scope only not beyond that

//But when we use the same programe but declaring power using var keyword now it will be acessible outside the if block scope , as var makes every variable with global scope , but let and const restricts this and helps to maintain the scope acessing strictness , for that reason only now in latest days no one use var as variable declartion keyword 
if( score > 100){ // This curly braces scope is called as "block scope"
    var power = "fly"
    console.log(`User power : ${power}`); // Output : User power : fly
    
}
console.log(`User power : ${power}`);// Output : User power : fly




// We can also write multiple statements inside if statements without using curly barces , such socpe are called as "implict scope" , where system itself understands automatically i have a scope

if(5 == 5) console.log(true) , // It is not recommandable , not a good practice
   console.log(true),
   console.log(true);
   
// Always use block scope
   /*Output :
true
true
true
   */



//Nested conditions :

const balance = 1000 ;

if(balance < 500){
    console.log("less than 500");
    
}else if(balance < 750){
    console.log("less than 750");
    
}else if(balance < 900){
    console.log("less tha 900");
    
    
}else{
    console.log("greater than 900 ");
    
}


// Real life condition checking

const userLoggedIn = true;
const debitCard = true ;
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(userLoggedIn && debitCard){ // For multiple condtion checking we use && , if any one condtion will be false then the if block statement won't run
    console.log("Allow to buy course");
    
}

if(loggedInFromGoogle || loggedInFromEmail){ // If any one condtion is true than ||(or) allows the if block to run
    console.log("User logged in");
    
}