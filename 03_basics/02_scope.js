let a  = 10 
const b = 20
var c = 30
console.log(a);
console.log(b);
console.log(c);

// Scope understanding

//var num3 = 300
let num1 =301
if (true){ // Whatever i write inside the if block is called as block scope and , outside if block are called as global scope
    let num1 = 1
    const num2 = 2
    //var num3 = 3
    console.log("Inside :", num1); // oUtput : 1
    
}
console.log("Outside :",num1); // Output  : 301
//console.log(num2);//Ouput : ReferenceError: num2 is not defined
//console.log(num3); // Ouput : 3



//Nested scope :

function one(){
    const username = "Apurva"

    function two(){
        const website = " youtube"
        console.log(username)
    }
    //console.log(website); // output : ReferenceError: website is not defined

    two() //Outupe : Apurva

}
one()

if(true){
    const username = "apurva"
    if(username === "apurva"){
        const website = "youtube"
        console.log(username + website); // apurvayoutube
        
    }
  //  console.log(website); // output : ReferenceError: website is not defined
    
}
//console.log(username); //ReferenceError: username is not defined



// ++++++++++++++++++interesting +++++++++++++++

function addone(num){
    return num + 1
}

console.log(addone(5)); // output : 6

const addTwo = function(num){ //This type of variable declartion by intializing it with function  its sometiems called as expression 
    return num + 2
}

console.log(addTwo(5)); //Output : 7

 


//console.log( addThree(3)); // It shows error : ReferenceError: Cannot access 'addThree' before initialization
const addThree = function(num){
    return num + 3
}

// Here above we are using addThree() method before intializing it so thats why it shows error , and this concept is called as function hoisting , where we try to use function before intializing it when we store funtion in variable 


// If we directly write function without storing it in a seprate variable then we didnt get error
console.log( addFour(3) ); //Output : 7

 function addFour(num){
    return num + 4
}